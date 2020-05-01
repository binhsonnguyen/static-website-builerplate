import { f } from './f'

f()
document.getElementById('action').onclick = function () {
  alert(f())
}
