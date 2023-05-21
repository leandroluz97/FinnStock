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
    public class SellOrderService
    {
        private readonly ILogger<SellOrderService> _logger;
        private readonly IUnitOfWork _unitOfWork;
        public SellOrderService(ILogger<SellOrderService> logger, IUnitOfWork unitOfWork)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
        }

        public async Task<SellOrderDto> CreateOrderAsync(SellOrderDto sellOrderDto, CancellationToken cancelationToken = default)
        {
            _logger.LogInformation("{CreateOrderAsync} param value {sellOrderDto}", nameof(CreateOrderAsync), sellOrderDto);

            if (sellOrderDto == null)
            {
                throw new ArgumentNullException(nameof(sellOrderDto));
            }

            sellOrderDto.EnsureValidation();

            var sellOrder = SellOrderMapper.ToDomain(sellOrderDto);
            sellOrder.GlobalId = Guid.NewGuid();

            _unitOfWork.SellOrderRepository.Add(sellOrder);

            await _unitOfWork.SaveChangesAsync();

            _logger.LogInformation("{CreateOrderAsync} {sellOrder}", nameof(CreateOrderAsync), sellOrder.GlobalId);

            return SellOrderMapper.ToDto(sellOrder);
        }

        public async Task<SellOrderDto> GetByIdAsync(Guid orderId, CancellationToken cancelationToken = default)
        {
            _logger.LogInformation("{GetByIdAsync} param value {orderId}", nameof(GetByIdAsync), orderId);

            if (orderId == default)
            {
                throw new ArgumentNullException(nameof(orderId));
            }

            var order = await _unitOfWork.SellOrderRepository.GetByGlobalIdAsync(orderId, cancelationToken);

            if (order == null)
            {
                throw new NotFoundException(nameof(order));
            }

            return SellOrderMapper.ToDto(order);
        }

        public async Task<IEnumerable<SellOrderDto>> GetByUserIdAsync(Guid userId, CancellationToken cancelationToken = default)
        {
            _logger.LogInformation("{GetByIdAsync} param value {orderId}", nameof(GetByIdAsync), userId);

            if (userId == default)
            {
                throw new ArgumentNullException(nameof(userId));
            }

            var orders = await _unitOfWork.SellOrderRepository.GetByUserIdAsync(userId, cancelationToken);

            if (orders == null)
            {
                throw new NotFoundException(nameof(orders));
            }

            if (orders.Any())
            {
                return default;
            }

            return orders.Select(order => SellOrderMapper.ToDto(order));
        }
    }
}
