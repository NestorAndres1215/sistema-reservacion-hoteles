using Api.Services;
using Api.Services.interfaces;
using System.ComponentModel.Design;

namespace Api.Extensions
{

    public static class ServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(
            this IServiceCollection services)
        {
            services.AddScoped<IAuthService, AuthService>();
            services.AddScoped<IUsuarioService, UsuarioService>();
 
            return services;
        }
    }
}
