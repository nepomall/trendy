// document.addEventListener('DOMContentLoaded', domGnbFuc);



// function domGnbFuc() {
//     let thisfilefullname = document.URL.substring(document.URL.lastIndexOf('/') + 1, document.URL.length);
//     const gnbList = document.querySelectorAll('.gnb_list');
//     console.log(thisfilefullname);

//     // pc
//     if(gnbList) {
//         gnbList.forEach((item, idx) => {
//             item.removeEventListener('mouseover', mouseoverFuc);
//             item.addEventListener('mouseover', mouseoverFuc);
    
//             item.removeEventListener('mouseleave', mouseleaveFuc);
//             item.addEventListener('mouseleave', mouseleaveFuc);
//         });
//     };


//     // mobile
//     const mMenuBtn = document.querySelector('.m_menu');
    
//     if(mMenuBtn) {
//         mMenuBtn.removeEventListener('click', mClickFuc);
//         mMenuBtn.addEventListener('click', mClickFuc);
//     };

    
//     function mouseoverFuc(e) {
//         let target = e.currentTarget;
//         const inner = target.querySelector('.inner_gnb_box');
//         const headerWrap = document.querySelector('.header_wrap');
//         const gnbBox = document.querySelector('.gnb_box');
//         let h = target.offsetHeight;
        
//         headerWrap.classList.add('on');
//         target.classList.add('on');

//         if(inner) {
//             gnbBox.classList.add('on')
//         };

//         if(thisfilefullname.indexOf('index') >= 0) {
//             const logo = document.querySelector('.logo img');
//             logo.setAttribute('src', '/img/icon/logo.svg');
//         };
//     };

//     function mouseleaveFuc(e) {
//         let target = e.currentTarget;
//         const inner = target.querySelector('.inner_gnb_box');
//         const headerWrap = document.querySelector('.header_wrap');
//         const gnbBox = document.querySelector('.gnb_box');

//         headerWrap.classList.remove('on');
//         target.classList.remove('on');

//         if(inner) {
//             gnbBox.classList.remove('on')
//         };

//         if(thisfilefullname.indexOf('index') >= 0) {
//             const logo = document.querySelector('.logo img');
//             logo.setAttribute('src', '/img/icon/w_logo.svg');
//         };
//     };


//     function mClickFuc() {
//         const body = document.querySelector('body');
//         const mHead = document.querySelector('.m_header');
//         let has = mHead.classList.contains('on');

//         if(has) {
//             mHead.classList.remove('on');
//             body.style.overflow = 'inherit';
//             $('.blackbg').fadeOut(200);
//         } else {
//             mHead.classList.add('on');
//             body.style.overflow = 'hidden';
//             $('.blackbg').fadeIn(200);
//         }
//     };
// }