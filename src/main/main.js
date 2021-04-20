import './main.css';

const Content = function () {
	return(
	<div class="main_content_article_table_content">
		
		<div class="main_content_article_table_content_number">1</div>
		<div class="main_content_article_table_content_date">19.04.21</div>
		<div class="main_content_article_table_content_description">Опис</div>
		<div class="main_content_article_table_content_sum">500.00грн</div>
		<div class="main_content_article_table_content_from">Павлюк	</div>
		<div class="main_content_article_table_content_input">
			
			<input type= "text" className = 'main_content_article_table_content_input_text'></input>
			<input type="checkbox" className = 'main_content_article_table_content_input_check'></input>
			<button type="submit" className ="main_content_article_table_content_input_button">OK</button>
		
		</div>

	</div>);
}

function Center() {
  return (
	  <div className ="main_content">
    		
			<div className ="main_content_sidebar">
				
				<div className ="main_content_sidebar_nav">
					<a href="#" className ="main_content_sidebar_nav_active">РЕЄСТРАЦІЯ В ДНЗ</a>
					<div className ="main_content_sidebar_nav_horizont"></div>
					<a href="#">ЕЛЕКТРОННА ЧЕРГА В ДНЗ</a>
	  			</div>
			
			</div>
			
			<div className ='main_content_article'>
				
				<div className ="main_content_article_filter">
					
					<div className ="main_content_article_filter_kindergarden">
						
						<div className ="main_content_article_filter_kindergarden_numberAddres">
							
							<div className ="main_content_article_filter_kindergarden_numberAddres_number">
								
								<p className = 'main_content_article_filter_kindergarden_numberAddres_number_para'>Номер ДНЗ:</p>
								
								<div className ='main_content_article_filter_kindergarden_numberAddres_number_select'>
									<select name="main_content_article_filter_kindergarden_numberAddres_number_select" id="select_number" required>
    									<option value="№20" selected>№20</option>
    									<option value="№21">№21</option>
    									<option value="№22">№22</option>
    									<option value="№23">№23</option>
    									<option value="№24">№24</option>
    									<option value="№25">№25</option>
									</select>
								</div>

							</div>
							
							<div className ="main_content_article_filter_kindergarden_numberAddres_addres">
								
								<p className = 'main_content_article_filter_kindergarden_numberAddres_addres_para'>Адреса ДНЗ:</p>
								<p className = 'main_content_article_filter_kindergarden_numberAddres_addres_para2'>
									м.Чернівці, вул.Полєтаєва, 18
								</p>
							
							</div>

						</div>
						
						<div className ="main_content_article_filter_kindergarden_button">
							
							<button type="submit" className ="main_content_article_filter_kindergarden_button button">Знайти</button>
						
						</div>
					
					</div>
					
					<div className ="main_content_article_filter_nameGroup">
						
						<div className ="main_content_article_filter_nameGroup_name">
							
							<p className = 'main_content_article_filter_nameGroup_name_para'>ФІЛЬТРУВАТИ СПИСОК:</p>
							<input type="checkbox" className = 'main_content_article_filter_nameGroup_name_check'></input>
							<p className = 'main_content_article_filter_nameGroup_name_checkDescription'>по прізвищу</p>
							<input type="text" className = 'main_content_article_filter_nameGroup_name_input'></input>

						</div>
						
						<div className ="main_content_article_filter_nameGroup_group">
							
							<input type="checkbox" className = 'main_content_article_filter_nameGroup_group_check'></input>
							
							<p className = 'main_content_article_filter_nameGroup_group_checkDescription'>по групі</p>
							
							<div className ="main_content_article_filter_nameGroup_group_select">
								
								<select name="main_content_article_filter_nameGroup_group_select" id="select_group" required>
    									<option value="переддошкільна" selected>переддошкільна</option>
    									<option value="молодша">молодша</option>
    									<option value="середня">середня</option>
    									<option value="старша">старша</option>
								</select>

							</div>

						</div>
					
					</div>
				
				</div>
				
				<div className ="main_content_article_table">

					<div class="main_content_article_table_header">

						<div class="main_content_article_table_header_number">ID</div>
						<div class="main_content_article_table_header_date">Дата</div>
						<div class="main_content_article_table_header_description">Опис</div>
						<div class="main_content_article_table_header_sum">Сума</div>
						<div class="main_content_article_table_header_from">Оплатив</div>
						<div class="main_content_article_table_header_input">Підтвердження</div>

					</div>

					<div class="main_content_article_table_content">

						<div class="main_content_article_table_content_number">1</div>
						<div class="main_content_article_table_content_date">19.04.21</div>
						<div class="main_content_article_table_content_description">Опис</div>
						<div class="main_content_article_table_content_sum">500.00грн</div>
						<div class="main_content_article_table_content_from">Павлюк	</div>
						<div class="main_content_article_table_content_input">
							
							<input type= "text" className = 'main_content_article_table_content_input_text'></input>
							<input type="checkbox" className = 'main_content_article_table_content_input_check'></input>
							<button type="submit" className ="main_content_article_table_content_input_button">OK</button>

						</div>

					</div>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
					<Content/>
				</div>
			
			</div>
		
		</div>
  );
}

export default Center;
