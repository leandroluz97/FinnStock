using FinnStock.Dtos;
using FinnStock.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinnStock.WebAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private readonly UserService _userService;
        public UsersController(ILogger<UsersController> logger, UserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpGet]
        [Route("{userId}")]
        public async Task<UserDto> GetByIdAsync(Guid userId)
        {
           return await _userService.GetByIdAsync(userId);
        }

        [HttpPut]
        [Route("{userId}")]
        public async Task<UserDto> UpdateAsync(Guid userId, UserDto user)
        {
            return await _userService.UpdateAsync(userId, user);
        }
    }
}
