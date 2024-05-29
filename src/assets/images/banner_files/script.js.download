var ajaxLock=false;function setProgressbarValue(value,total){var percent=Math.ceil((value/total)*100);$('.tcv-progress-value').animate({'width':percent+'%'},150);$('.tcv-progress-meta-value').html(value);$('.tcv-progress-meta-total').html(total);}
var confirmModal={yesCallBack:null,noCallBack:null,text:null,level:null,data:null,init:function(){$('#btn-confirm-no').click(function(){if(confirmModal.noCallBack){confirmModal.noCallBack(confirmModal.data);}
$('#modal-confirm').modal('hide');});$('#btn-confirm-yes').click(function(){if(confirmModal.yesCallBack){confirmModal.yesCallBack(confirmModal.data);}
$('#modal-confirm').modal('hide');});},reset:function(){$('#confirm-title').attr('class','modal-title');$('#btn-confirm-yes').attr('class','btn btn-sm');this.yesCallBack=null,this.noCallBack=null,this.text=null,this.level='warning';this.data=null;},showConfirm:function(text,level,yesCallBack,noCallBack,data){this.reset();this.text=text;if(level){this.level=level;}
if(yesCallBack){this.yesCallBack=yesCallBack;}
if(noCallBack){this.noCallBack=noCallBack;}
if(data){this.data=data;}
this.showConfirmModal();},showConfirmModal:function(){if(this.level=='danger'){$('#confirm-title').addClass('text-danger');$('#btn-confirm-yes').attr('class','btn btn-sm btn-danger');}else if(this.level=='warning'){$('#confirm-title').addClass('text-warning');$('#btn-confirm-yes').attr('class','btn btn-sm btn-warning');}else if(this.level=='info'){$('#confirm-title').addClass('text-highlight');$('#btn-confirm-yes').attr('class','btn btn-sm btn-topcv-primary');}
$('#confirm-message').text(this.text);$('#modal-confirm').modal('show');}};function showModalError(message){$('#error-message').html(message);$('#modal-error').modal('show');}
function showModalSuccess(message){$('#success-message').html(message);$('#modal-success').modal('show');}
$(document).ready(function(){confirmModal.init();});