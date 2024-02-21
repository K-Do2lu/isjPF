const url_base = "../../pages/";
const ia = [
	{
		cateTitle: 'Prototype',
		cateItems: [
			{
				state: 'default', // default, done, hold, issue
				url: 'prototype/layout.html',
				menu: '레이아웃',
				memos: [
					{user: '김도연', date: 'YYYY-MM-DD', desc: '완료'},
				],
			},
			{
				state: 'default', // default, done, hold, issue
				url: 'prototype/board_list.html',
				menu: '목록화면',
				memos: [
					{user: '김도연', date: 'YYYY-MM-DD', desc: '완료'},
				],
			},
			{
				state: 'default', // default, done, hold, issue
				url: 'prototype/board_form.html',
				menu: '등록화면',
				memos: [
					{user: '김도연', date: 'YYYY-MM-DD', desc: '완료'},
				],
			},
			{
				state: 'default', // default, done, hold, issue
				url: 'prototype/board_view.html',
				menu: '상세화면',
				memos: [
					{user: '김도연', date: 'YYYY-MM-DD', desc: '완료'},
				],
			},
		]
	},
	{
		cateTitle: 'IA',
		cateItems: [
			{
				state: 'default', // default, done, hold, issue
				url: 'main/main.html',
				menu: '메인',
				memos: [
					{user: '김도연', date: 'YYYY-MM-DD', desc: '완료'},
				],
			},
			{
				state: 'default', // default, done, hold, issue
				url: 'main/searchBar.html',
				menu: '메인 - 검색창',
				memos: [
					{user: '김도연', date: 'YYYY-MM-DD', desc: '완료'},
				],
			},
			{
				state: 'default', // default, done, hold, issue
				url: 'about/history.html',
				menu: 'About - 이순종 교수님 이력',
				memos: [
					{user: '김도연', date: 'YYYY-MM-DD', desc: '완료'},
				],
			},
			{
				state: 'default', // default, done, hold, issue
				url: 'about/contact.html',
				menu: 'About - 1:1문의',
				memos: [
					{user: '김도연', date: 'YYYY-MM-DD', desc: '완료'},
				],
			},
		]
	},

	/*
	{
		cateTitle: 'Sample',
		cateItems: [
			{
				state: 'default',
				url: '#',
				menu: 'Depth2 > Depth3 > Content (Cases)',
				memos: [
					{user: '홍길동', date: '2023-11-20', desc: '완료'},
					{user: '이순신', date: '2023-11-23', desc: '완료버튼 클래스 수정'}
				],
			},
			{
				state: 'done',
				url: '#',
				menu: 'Depth2 > Depth3 > Content (Empty)',
				memos: [
					{user: '홍길동', date: '2023-11-20', desc: '완료'}
				],
			},
			{
				state: 'hold',
				url: '#',
				menu: 'Depth2 > Depth3 > Content (입력전)',
				memos: [
					{user: '홍길동', date: '2023-11-20', desc: '업무범위 제외됨'},
				],
			},
			{
				state: 'issue',
				url: '#',
				menu: 'Depth2 > Depth3 > Content (입력후)',
				memos: [
					{user: '홍길동', date: '2023-11-20', desc: '디자인 검토 필요'},
				],
			},
		]
	},
	*/
]

let ia_html = '';
// 카테고리별
for (let i = 0; i < ia.length; i++){
	ia_html = ia_html + ''
	+'<div class="g-h2-head">'
	+'	<h2 class="g-h2">'+ ia[i].cateTitle +' ('+ ia[i].cateItems.length +')</h2>'
	// +'	<span class="g-label-done">완료</span>'
	// +'	<span class="g-label-hold">보류</span>'
	// +'	<span class="g-label-issue">이슈</span>'

	+'	<button type="button" class="btn g-sec-toggle" onclick="guideSecToggle(this)">'
	+'		<span class="material-symbols-outlined">expand_circle_down</span>'
	+'	</button>'
	+'</div>'
	+'<div class="g-h2-body">'
	+'	<ul class="g-ia-list">';
	// 카테고리 목록
	for (let j = 0; j < ia[i].cateItems.length; j++){
		ia_html = ia_html + ''
		+'		<li class="g-ia-item is-'+ia[i].cateItems[j].state+'">'
		+'			<div class="g-ia-primary">'
		+'				<div class="g-ia-num">'+(j+1)+'</div>'
		+'				<div class="g-ia-menu">'
		+'					<a href="'+url_base+ia[i].cateItems[j].url+'" target="_blank">'+ ia[i].cateItems[j].menu +'&nbsp;<span class="url">'+ia[i].cateItems[j].url+'</span></a>'
		+'				</div>'
		+'				<div class="g-ia-user" title="최근 작업자">'
		// 작업내역 목록 - 작업자
		for (let k = 0; k < ia[i].cateItems[j].memos.length; k++){
			ia_html = ia_html + ''
			+'					<p>'+ia[i].cateItems[j].memos[k].user+'</p>'
		}
		ia_html = ia_html + ''
		+'				</div>'
		+'				<div class="g-ia-date" title="최근 날짜">'
		// 작업내역 목록 - 날짜
		for (let l = 0; l < ia[i].cateItems[j].memos.length; l++){
			ia_html = ia_html + ''
			+'					<p>'+ia[i].cateItems[j].memos[l].date+'</p>'
		}
		ia_html = ia_html + ''
		+'				</div>'
		+'			</a>'
		+'			<div class="g-ia-support">'
		// 작업내역 목록 - 비고설명
		for (let m = 0; m < ia[i].cateItems[j].memos.length; m++){
			ia_html = ia_html + ''
			+'				<div class="g-ia-history">'
			+'					<p class="memo">'+ia[i].cateItems[j].memos[m].desc+'</p>'
			+'					<p class="date">'+ia[i].cateItems[j].memos[m].date+'</p>'
			+'					<p class="name">'+ia[i].cateItems[j].memos[m].user+'</p>'
			+'				</div>'
		}
		ia_html = ia_html + ''
		+'			</div>'
		+'			<button type="button" class="btn g-ia-toggle" onclick="guideIAToggle(this)">'
		+'				<span class="material-symbols-outlined">expand_more</span>'
		+'			</button>'
		+'		</li>'
	}
	ia_html = ia_html + ''
	+'		<!-- //Sample -->'
	+'	</ul>'
	+'</div>';
}
