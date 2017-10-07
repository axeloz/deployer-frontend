import $ from 'jquery';
import toastr from 'toastr';

import views from './pages/views';
import collections from './pages/collections';

toastr.options.closeButton = true;
toastr.options.progressBar = true;
toastr.options.preventDuplicates = true;
toastr.options.closeMethod = 'fadeOut';
toastr.options.closeDuration = 300;
toastr.options.closeEasing = 'swing';
toastr.options.positionClass = 'toast-bottom-right';
toastr.options.timeOut = 5000;
toastr.options.extendedTimeOut = 7000;

$.ajaxPrefilter((options, originalOptions, jqXHR) => {
  jqXHR.setRequestHeader('X-CSRF-Token', $('meta[name="token"]').attr('content'));
});

window.app = { views, collections };