import './header.css';
import logo from '../img/logo.svg'
import logo_customer from '../img/userLogo.svg'
import Clock from './header_clock'

function Top() {
  return (
    <div className = "page_header">
		<div className = "page_header_content">
			<img className = "logo header_logo" src= {logo} alt="logo"></img>
			<span id = "doc_time"><Clock/></span>	
			<div className = "page_header_content_end">
				<p>Вітаємо Оксана Дмитрівна</p>
				<img className = "page_header_content_end_parents_logo" src= {logo_customer}></img>
			</div>
		</div>
	</div>
  );
}

export default Top;