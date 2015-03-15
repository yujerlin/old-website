$('body').scrollspy({ target: '#scrollTarget' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})