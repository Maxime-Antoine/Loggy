using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Loggy.Web.Models
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
}