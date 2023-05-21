using FinnStock.Dtos;
using FinnStock.Infrastructure.Abstractions;
using FinnStock.Infrastructure.Abstractions.Repositories;
using FinnStock.Services.Exceptions;
using FinnStock.Services.Mappers;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FinnStock.Services
{
    public class BuyOrderService
    {
        private readonly ILogger<BuyOrderService> _logger;
        private readonly IUnitOfWork _unitOfWork;

        public BuyOrderService(ILogger<BuyOrderService> logger, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        public async Task<BuyOrderDto> CreateOrderAsync(Guid userId, BuyOrderDto buyOrderDto, CancellationToken cancelationToken = default)
        {
            _logger.LogInformation("{CreateOrderAsync} param value {buyOrderDto}", nameof(CreateOrderAsync), buyOrderDto);

            if (userId == default)
            {
                throw new ArgumentNullException(nameof(userId));
            }

            if (buyOrderDto == null)
            {
                throw new ArgumentNullException(nameof(buyOrderDto));
            }

            buyOrderDto.EnsureValidation();

            var buyOrder = BuyOrderMapper.ToDomain(buyOrderDto);

            buyOrder.GlobalId = Guid.NewGuid();
            buyOrder.UserId = userId;

            _unitOfWork.BuyOrderRepository.Add(buyOrder);

            await _unitOfWork.SaveChangesAsync();

            _logger.LogInformation("{CreateOrderAsync} {buyOrder}", nameof(CreateOrderAsync), buyOrder.GlobalId);

            return BuyOrderMapper.ToDto(buyOrder);
        }

        public async Task<BuyOrderDto> GetByIdAsync(Guid orderId, CancellationToken cancelationToken = default)
        {
            _logger.LogInformation("{GetByIdAsync} param value {orderId}", nameof(GetByIdAsync), orderId);

            if (orderId == default)
            {
                throw new ArgumentNullException(nameof(orderId));
            }

            var order  = await _unitOfWork.BuyOrderRepository.GetByGlobalIdAsync(orderId, cancelationToken);

            if(order == null)
            {
                throw new NotFoundException(nameof(order));
            }
                
            return BuyOrderMapper.ToDto(order);
        }

        public async Task<IEnumerable<BuyOrderDto>> GetByUserIdAsync(Guid userId, CancellationToken cancelationToken = default)
        {
            _logger.LogInformation("{GetByIdAsync} param value {orderId}", nameof(GetByIdAsync), userId);

            if (userId == default)
            {
                throw new ArgumentNullException(nameof(userId));
            }

            var orders = await _unitOfWork.BuyOrderRepository.GetByUserIdAsync(userId, cancelationToken);

            if (orders == null)
            {
                throw new NotFoundException(nameof(orders));
            }

            if (orders.Any())
            {
                return default;
            }

            return orders.Select(order => BuyOrderMapper.ToDto(order));
        }

    }
}
