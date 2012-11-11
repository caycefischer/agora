using System;
using System.Data.Linq.Mapping;
using System.ComponentModel.DataAnnotations;

namespace Agora.Data
{
	public class SUser
	{
		[Required,Key]  public virtual int          UserID			{ get; set; }
        [Required]		public virtual DateTime		CreatedOn  		{ get; set; }
		[Required]		public virtual int			CreatedBy  		{ get; set; }
		[Required]		public virtual DateTime		UpdatedOn  		{ get; set; }
		[Required]		public virtual int			UpdatedBy  		{ get; set; }
        [Required]      public virtual string       Email           { get; set; }
						public virtual string		Name        	{ get; set; }
						public virtual string		Description    	{ get; set; }
						public virtual int  		AvatarID    	{ get; set; }
						public virtual string		Symbols	    	{ get; set; }
	}
}
