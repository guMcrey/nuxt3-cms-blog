export const debounce = (fun: any, wait: number) => {
  let timeout: any = null

  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      fun()
    }, wait)
  }
}
