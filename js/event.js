document.addEventListener("DOMContentLoaded", () => {
  const tab = document.querySelectorAll(".tab_list");
  const tabSect = document.querySelectorAll(".tab_sect");
  const boxNum = $('.sect.show .event_box').length;
  const vw = $(window).width();
  if(boxNum > 12){
    $('.show .event_box_wrap').css('border-bottom','1px solid #efefef');
  };

  if(vw < 901){
    $('.event_box_wrap').css('border-bottom','1px solid #efefef');
  };

  tab.forEach((item, idx) => {
    item.addEventListener("click", () => {
      let has = item.classList.contains("active");

      if (has) {
        return false;
      } else {
        tab.forEach((items, indx) => {
          items.classList.remove("active");
        });
        tabSect.forEach((items, indx) => {
          items.style.display = "none";
          items.classList.remove('show');
        });

        let val = item.getAttribute("data-tab");
        let el = document.getElementById(val);

        item.classList.add("active");
        el.style.display = "block";
        el.classList.add('show');
      }

      const eventBox = $('.show .event_box');
      const eventNum = eventBox.length;
      console.log(eventNum);

      if(eventNum > 12){
        $('.show .event_box_wrap').css('border-bottom','1px solid #efefef');
      };
      
    });
  });


});
