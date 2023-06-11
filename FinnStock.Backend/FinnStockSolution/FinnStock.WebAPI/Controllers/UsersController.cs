using FinnStock.Dtos;
using FinnStock.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinnStock.WebAPI.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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

        [HttpPost]
        [Route("{userId}/profile")]
        public async Task UploadAsync(Guid userId)
        {
            IFormFile file = Request.Form.Files[0];
            if(file == null)
                throw new InvalidOperationException();
            
            Stream fileStream = file.OpenReadStream();
     
            await _userService.UploadProfileImageAsync(userId, fileStream);
        }

        [HttpGet]
        [Route("{userId}/profile/{profileId}")]
        public async Task<string> GetProfileAsync(Guid userId)
        {
            return await _userService.GetProfileImageAsync(userId);
        }
    }
}
