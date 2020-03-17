document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});


function initMaterializeSelect() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
}
