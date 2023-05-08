

using FinnStock.SQLWork;
using FinnStock.UnitOfWork;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using FinnStock.Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using FinnStock.Infrastructure.Abstractions;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.IdentityModel.Tokens;
using FinnStock.Infrastructure.Abstractions.Clients;
using FinnStock.Clients.Email;
using FinnStock.Business.Abstractions;
using FinnStock.Services;
using FinnStock.Clients.Message;

namespace FinnStock.DependencyInjection
{
    public static class ConfigureServicesExtension
    {

        public static IServiceCollection ConfigureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(configuration.GetConnectionString("DefaultConnection"))); //ServiceLifetime.Transient

            services.AddCors((options) => {
                options.AddDefaultPolicy((builder) => { 
                    builder.WithOrigins("*");
                    builder.WithOrigins(configuration.GetSection("AllowedOrigin").Value);
                });
            });
            services.AddLogging();

            services.AddSingleton<IConfiguration>(configuration);
            services.AddTransient<IEmailClient, SengridClient>();
            services.AddTransient<IMessageClient, TwilioClient>();
            services.AddTransient<AuthenticationService>();
            services.AddScoped<IUnitOfWork, FinnStock.UnitOfWork.UnitOfWork>();

            services.AddIdentity<User, Role>(options =>
            {
                options.Password.RequiredLength = 5;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = true;
                options.Password.RequireDigit = true;
                options.SignIn.RequireConfirmedEmail = true;
                //options.SignIn.RequireConfirmedAccount = false;
            })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders()
                .AddUserStore<UserStore<User, Role, ApplicationDbContext, Guid>>()
                .AddRoleStore<RoleStore<Role, ApplicationDbContext, Guid>>();

            services.Configure<DataProtectionTokenProviderOptions>(options =>
            {
                options.TokenLifespan = TimeSpan.FromHours(1);
            });

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options => {
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateAudience = true,
                    ValidAudience = configuration["Jwt:Audience"],
                    ValidateIssuer = true,
                    ValidIssuer = configuration["Jwt:Issuer"],
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(configuration["Jwt:Secret_key"]))
                };
            });

            return services;
        }

    }
}


