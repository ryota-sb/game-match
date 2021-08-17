export default function({store, redirect}) {
  if(!store.state.isAuth) {
    redirect('/login')
  }
}