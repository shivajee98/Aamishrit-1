// app/layout.tsx or wherever your root layout lives
import { Provider } from "react-redux"
import { store } from "@/react-redux/store"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
