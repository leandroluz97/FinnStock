

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

           
            services.AddScoped<IUnitOfWork, FinnStock.UnitOfWork.UnitOfWork>();

            services.AddIdentity<User, Role>(options =>
            {
                options.Password.RequiredLength = 5;
                options.Password.RequireNonAlphanumeric = true;
                options.Password.RequireUppercase = false;
                options.Password.RequireLowercase = true;
                options.Password.RequireDigit = true;
            })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders()
                .AddUserStore<UserStore<User, Role, ApplicationDbContext, Guid>>()
                .AddRoleStore<RoleStore<Role, ApplicationDbContext, Guid>>();

            return services;
        }

    }
}


