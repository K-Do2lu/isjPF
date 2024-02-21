const url_base = "../../pages/";
const ia = [
	{
		cateTitle: 'Prototype',
		cateItems: [
			{
				state: 'default', // default, done, hold, issue
				menu: '레이아웃',
				url: 'prototype/layout.html',
				type: '',
				memos: [
					'김도연 : YYYY-MM-DD 예정',
				],
			},
			{
				state: 'default', // default, done, hold, issue
				menu: '목록화면',
				url: 'prototype/board_list.html',
				type: '',
				memos: [
					'김도연 : YYYY-MM-DD 예정',
				],
			},
			{
				state: 'default', // default, done, hold, issue
				menu: '등록화면',
				url: 'prototype/board_form.html',
				type: '',
				memos: [
					'김도연 : YYYY-MM-DD 예정',
				],
			},
			{
				state: 'default', // default, done, hold, issue
				menu: '상세화면',
				url: 'prototype/board_view.html',
				type: '',
				memos: [
					'김도연 : YYYY-MM-DD 예정',
				],
			},
			{
				state: 'default', // default, done, hold, issue
				menu: '모달공통',
				url: 'prototype/modals.html',
				type: '',
				memos: [
					'김도연 : YYYY-MM-DD 예정',
				],
			},
		]
	},
	{
		cateTitle: 'IA',
		cateItems: [
			{
				state: 'default', // default, done, hold, issue
				menu: '메인',
				url: 'main/main.html',
				type: '',
				memos: [
					'김도연 : YYYY-MM-DD 예정',
				],
			},
			{
				state: 'default', // default, done, hold, issue
				menu: '메인 - 검색창',
				url: 'main/searchBar.html',
				type: '',
				memos: [
					'김도연 : YYYY-MM-DD 예정',
				],
			},
			{
				state: 'default', // default, done, hold, issue
				menu: 'About - 이순종 교수님 이력',
				url: 'about/history.html',
				type: '',
				memos: [
					'김도연 : YYYY-MM-DD 예정',
				],
			},
			{
				state: 'default', // default, done, hold, issue
				menu: 'About - 1:1문의',
				url: 'about/contact.html',
				type: '',
				memos: [
					'김도연 : YYYY-MM-DD 예정',
				],
			},
		]
	},


	{
		cateTitle: 'Samples',
		cateItems: [
			{
				state: 'default', // default, done, hold, issue
				menu: 'Depth1 - Depth2 - Content (Cases)',
				url: '#',
				type: '',
				memos: [
					'홍길동 : 2023-11-20 예정',
				],
			},
			{
				state: 'done', // default, done, hold, issue
				menu: 'Depth1 - Depth2 - Content (Nodata)',
				url: '#',
				type: '',
				memos: [
					'홍길동 : 2023-11-20 완료',
					'이순신 : 2023-11-23 완료버튼 클래스 수정',
				],
			},
			{
				state: 'hold', // default, done, hold, issue
				menu: 'Depth1 - Depth2 - Content (입력 전)',
				url: '#',
				type: 'popup',
				memos: [
					'홍길동 : 2023-11-20 업무범위 제외됨',
				],
			},
			{
				state: 'issue', // default, done, hold, issue
				menu: 'Depth1 - Depth2 - Content (입력 후)',
				url: '#',
				type: '',
				memos: [
					'홍길동 : 2023-11-20 디자인 검토 필요',
				],
			},
		]
	},

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
	+'	<table class="g-ia-table">';
	// 카테고리 목록
	for (let j = 0; j < ia[i].cateItems.length; j++){
		ia_html = ia_html + ''
		+'		<tr class="g-ia-item is-'+ia[i].cateItems[j].state+'">'
		+'			<td class="g-ia-num">'+(j+1)+'</td>'
		+'			<td class="g-ia-menu">'
		+'				<a href="'+url_base+ia[i].cateItems[j].url+'" target="_blank">'+ ia[i].cateItems[j].menu +'</a>'
		+'			</td>'
		+'			<td class="g-ia-type">'
		+'				<p>'+ia[i].cateItems[j].type+'</p>'
		+'			</td>'
		+'			<td class="g-ia-url">'
		+'				<a href="'+url_base+ia[i].cateItems[j].url+'" target="_blank">'+ia[i].cateItems[j].url+'</a>'
		+'			</td>'
		+'			<td class="g-ia-memo">'
		// 작업내역 목록 - 비고설명
		for (let m = 0; m < ia[i].cateItems[j].memos.length; m++){
			ia_html = ia_html + ''
			+'			<p>'
			+'			<span class="name">'+ia[i].cateItems[j].memos[m]+'</span>'
			+'			</p>'
		}
		ia_html = ia_html + ''
		+'			</td>'
		+'		</tr>'
	}
	ia_html = ia_html + ''
	+'		<!-- //Sample -->'
	+'	</table>'
	+'</div>';
}