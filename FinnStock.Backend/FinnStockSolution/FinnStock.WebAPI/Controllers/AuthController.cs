using FinnStock.Dtos;
using FinnStock.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinnStock.WebAPI.Controllers
{
    [Route("api/v1/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthenticationService _authenticationService;
        public AuthController(AuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterDto registerDto)
        {
           await _authenticationService.Register(registerDto);
           return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> Confirm(ConfirmEmailDto confirmEmailDto)
        {
            await _authenticationService.ConfirmEmail(confirmEmailDto);
            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult<LoginResponseDto>> Login(LoginDto loginDto)
        {
            return await _authenticationService.Login(loginDto);
        }

        [HttpPost]
        public async Task<ActionResult<ResponseToken>> ValidateOTPCode(ValidateOtpDto validateOtpDto)
        {
            return await _authenticationService.ValidateOTP(validateOtpDto);
        }
    }
}
