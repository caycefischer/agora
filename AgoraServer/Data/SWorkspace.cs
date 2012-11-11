using System;
using System.Data.Linq.Mapping;
using System.ComponentModel.DataAnnotations;

namespace Agora.Data
{
	public class SWorkspace
	{
		[Required,Key]  public virtual int          WorkspaceID		{ get; set; }
        [Required]		public virtual DateTime		CreatedOn  		{ get; set; }
		[Required]		public virtual int			CreatedBy  		{ get; set; }
		[Required]		public virtual DateTime		UpdatedOn  		{ get; set; }
		[Required]		public virtual int			UpdatedBy  		{ get; set; }
		          		public virtual DateTime?	DeletedOn  		{ get; set; }
		          		public virtual int?			DeletedBy  		{ get; set; }
		[Required]		public virtual string		Name        	{ get; set; }
						public virtual string		Description    	{ get; set; }
	}
}
