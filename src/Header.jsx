import "./styles/header.css"

export default function Header() {

  return (
    <div className="header">
        <div>
            <p>ZAMBRANO</p>
        </div>
        <div>
            <a class="header__cart" href="#">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2.5V6.5H3V20.5C3 21.0304 3.21071 21.5391 3.58579 21.9142C3.96086 22.2893 4.46957 22.5 5 22.5H19C19.5304 22.5 20.0391 22.2893 20.4142 21.9142C20.7893 21.5391 21 21.0304 21 20.5V6.5H17V2.5H7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 6.5H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>
        </div>
    </div>
  )
}
