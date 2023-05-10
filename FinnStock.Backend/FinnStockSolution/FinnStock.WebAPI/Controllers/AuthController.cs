using FinnStock.Domain;
using FinnStock.Dtos;
using FinnStock.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Microsoft.AspNetCore.Identity;
using static Azure.Core.HttpHeader;

namespace FinnStock.WebAPI.Controllers
{
    [Route("api/v1/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly AuthenticationService _authenticationService;
        private readonly SignInManager<User> _signInManager;
        public AuthController(AuthenticationService authenticationService, SignInManager<User> signInManager)
        {
            _authenticationService = authenticationService;
            _signInManager = signInManager;
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterDto registerDto)
        {
            await _authenticationService.Register(registerDto);
            return Ok();
        }

        [HttpPost]
        public IActionResult ExternalLogin(string provider, string returnUrl)
        {
            //use on POST html button http://localhost:5100/api/v1/auth/ExternalLogin?provider=Google&returnUrl=/home
            var redirectUrl = $"http://localhost:5100/api/v1/auth/ExternalAuthCallBack?returnUrl={returnUrl}";
            var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
            properties.AllowRefresh = true;
            return Challenge(properties, provider);
        }

        [HttpGet]
        public async Task<IActionResult> ExternalAuthCallBack()
        {
            ExternalLoginInfo info = await _signInManager.GetExternalLoginInfoAsync();
            var result = await _authenticationService.ExternalLogin(info);

            if (result == null)
            {
                //sign in failed
            }

            //var options = new CookieOptions()
            //{
            //    //Needed so that domain.com can access  the cookie set by api.domain.com
            //    Domain = settings.AppDomain,
            //    Expires = DateTime.UtcNow.AddMinutes(5)
            //};

            //Response.Cookies.Append(
            //    Common.IdentityConstants.AuthTokenHolderCookieName,
            //    JsonConvert.SerializeObject(result, new JsonSerializerSettings
            //    {
            //        ContractResolver = new DefaultContractResolver
            //        {
            //            NamingStrategy = new CamelCaseNamingStrategy()
            //        },
            //        Formatting = Formatting.Indented
            //    }), options);

            return Redirect($"http://localhost:3000/dashboard/");
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
