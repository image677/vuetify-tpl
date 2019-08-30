import userRouter from './router'

userRouter.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('token')) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
