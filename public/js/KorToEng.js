function KTE(city) {
	var check_eng = /[a-zA-Z]/;

	// city값이 영어일시 그대로 리턴
	if (check_eng.test(city) == true) {
		city=city.toLowerCase();
		if (
			city == 'seoul' ||
			city == 'incheon' ||
			city == 'gyeonggi-do' ||
			city == 'busan' ||
			city == 'daegu' ||
			city == 'gwanju' ||
			city == 'daejeon' ||
			city == 'ulsan' ||
			city == 'gangwon-do' ||
			city == 'chungcheongbuk-do' ||
			city == 'chungcheongnam-do' ||
			city == 'jeollabuk-do' ||
			city == 'jeollanam-do' ||
			city == 'gyeongsangbuk-do' ||
			city == 'gyeongsangnam-do' ||
			city == 'jeju-do'
		) {
			return city;
		} else return 'err';
	} else if (city == '서울') return 'Seoul';
	else if (city == '인천') return 'Incheon';
	else if (city == '경기' || city == '경기도') return 'Gyeonggi-do';
	else if (city == '부산') return 'Busan';
	else if (city == '대구') return 'Daegu';
	else if (city == '광주') return 'Gwanju';
	else if (city == '대전') return 'Daejeon';
	else if (city == '울산') return 'Ulsan';
	else if (city == '강원도') return 'Gangwon-do';
	else if (city == '충북' || city == '충청북도') return 'Chungcheongbuk-do';
	else if (city == '충남' || city == '충청남도') return 'Chungcheongnam-do';
	else if (city == '전북' || city == '전라북도') return 'Jeollabuk-do';
	else if (city == '전남' || city == '전라남도') return 'Jeollanam-do';
	else if (city == '경북' || city == '경상북도') return 'Gyeongsangbuk-do';
	else if (city == '경남' || city == '경상남도') return 'Gyeongsangnam-do';
	else if (city == '제주' || city == '제주도') return 'Jeju-do';
	else {
		return 'err';
	}
}

module.exports = KTE;