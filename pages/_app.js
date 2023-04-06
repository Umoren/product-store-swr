import '../styles/globals.css'

function Layout({ children }) {
  return (
    <main className="bg-gray-900 text-white ">{children}</main>
  )
}

function MyApp({ Component, pageProps }) {
  return (<Layout><Component {...pageProps} /> </Layout>)
}

export default MyApp
