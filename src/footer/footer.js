import './footer.css';
import logo from '../img/logo.svg'

function Bottom() {
  return (
	<footer className = "page_footer">
	<div className = "page_footer_content">
		 <img className = "page_footer_logo" src= {logo} height="100%"></img>
		 <div className = "page_footer_content_wrapper">
			  <div className = "page_footer_content_wrapper_terms"><a href="#">умови користування сайтом</a></div>
			  <div className = "page_footer_content_wrapper_rules"><a href="#">правила публікацій та розсилок</a></div>
			  <div className = "page_footer_content_wrapper_policy"><a href="#">політика конфіденційності</a></div>
		 </div>
	</div>
</footer>
  );
}

export default Bottom;