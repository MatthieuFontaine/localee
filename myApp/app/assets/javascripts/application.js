// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets
$(document).ready(function () {
  var h = $('.cutsom-type-reduction');
  console.log(h);
  $('.cutsom-type-reduction').change(function() {
    var mySel = $('.cutsom-type-reduction').val();
    if (mySel === 'Réduction en valeur (ex: -5€ )')
    {
      console.log(mySel);
      if ($('#custom-field-form-for-discount-id-1').hasClass('custom-field-form-for-discount'))
      {
        $('#custom-field-form-for-discount-id-1').removeClass('custom-field-form-for-discount');
      }

      if ($('#custom-field-form-for-discount-id-2').hasClass('custom-field-form-for-discount') == false)
      {
        $('#custom-field-form-for-discount-id-2').addClass('custom-field-form-for-discount');
      }

      //$('.custom-field-form-for-discount').fadeIn('slow');
    }
    else if (mySel === 'Réduction en pourcentage (ex: -10%)') {
      console.log(mySel);

      if ($('#custom-field-form-for-discount-id-2').hasClass('custom-field-form-for-discount') == true )
      {
        console.log('1');
        $('#custom-field-form-for-discount-id-2').removeClass('custom-field-form-for-discount');
      }

      if ($('#custom-field-form-for-discount-id-1').hasClass('custom-field-form-for-discount') == false)
      {
        console.log('2');
        $('#custom-field-form-for-discount-id-1').addClass('custom-field-form-for-discount');
      }
    }
    else if (mySel === 'Bien pour un achat donné') {

    }
    else
    {
      // Do nothing
      console.log(mySel);
    }
  })
})
