using FinnStock.Business.Abstractions;
using FinnStock.Domain;
using FinnStock.Dtos;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace FinnStock.Services
{
    public class JwtService : IJwtService
    {
        private readonly IConfiguration _configuration;
        public JwtService(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public ResponseToken CreateJWToken(User user)
        {
            //DateTime expiration = DateTime.UtcNow.AddMinutes(Convert.ToDouble(_configuration["Jwt:Exp_time"]));
            //Claim[] claims = new Claim[] {
            //    new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()), //Subject (userId)
            //    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()), //JWT unique ID
            //    new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()), //Issued at (date and timeof token generation)
            //    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()), //Unit name Identifier of the user (Id or email)
            //};

            //SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Secret_key"]));

            //SigningCredentials signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            //JwtSecurityToken tokenGenerator = new JwtSecurityToken(
            //    _configuration["Jwt:Issuer"],
            //    _configuration["Jwt:Audience"],
            //    claims,
            //    expires: expiration,
            //    signingCredentials: signingCredentials
            //    );

            //JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            //var token = tokenHandler.WriteToken(tokenGenerator);


            //return new ResponseToken() { 
            //    Token = token, 
            //    RefreshToken = GenerateRefreshToken(),
            //    RefreshTokenExpirationTime = DateTime.Now.AddMinutes(Convert.ToInt32(_configuration["RefreshToken:Exp_time"]))
            //};
            throw new NotImplementedException();
        }


        private string GenerateRefreshToken()
        {
            //var bytes = new byte[64];
            //var randomNumberGenerator = RandomNumberGenerator.Create();
            //randomNumberGenerator.GetBytes(bytes);
            //return Convert.ToBase64String(bytes);
            throw new NotImplementedException();
        }
        public ClaimsPrincipal? GetPrincipalFromJwt(string? token)
        {
            //var tokenValidationParameters = new TokenValidationParameters()
            //{
            //    ValidateAudience = true,
            //    ValidAudience = _configuration["Jwt:Audience"],
            //    ValidateIssuer = true,
            //    ValidIssuer = _configuration["Jwt:Issuer"],
            //    ValidateIssuerSigningKey = true,
            //    IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration["Jwt:Secret_key"])),
            //    ValidateLifetime = false, //Should Be false as the Jwtoken is already expired
            //};

            //JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            //var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken securityToken);

            //if(securityToken is not JwtSecurityToken jwtSecurityToken || !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
            //{
            //    throw new SecurityTokenException("Invalid token");
            //}

            //return principal;
            throw new NotImplementedException();
        }
    }
}