let theads_container = document.getElementsByClassName("comment-thread")[0];
function tag_html(elm) {
    return `<span class="badge bg-primary">${elm.tag}</span>`;
}
function threads_card(elm) {
  let last_upadate_date = new Date(elm.date_of_last_update).getTime();
  let curr_date = new Date().getTime();
  let days_ago = parseInt((curr_date - last_upadate_date) / 1000 / 86400);
  let details = document.createElement("details");
  details.open = true;
  details.className = "comment";
  details.id = `comment-${elm.id}`;
  details.innerHTML = `
  <a href="#comment-${elm.id}" class="comment-border-link">
  <span class="sr-only">Jump to comment-${elm.id}</span>
  </a>
  <summary>
  <div class="comment-heading">
  <div class="comment-voting">
  <button class="upvote" id=${
    elm.id
  } type="button" onClick="upvote_callback(this.id)">
  <span aria-hidden="true">&#9650;</span>
  <span class="sr-only">Vote up</span>
  </button>
  <button id=${
    elm.id
  } class="downvote" onClick="downvote_callback(this.id)" type="button">
  <span aria-hidden="true">&#9660;</span>
  <span class="sr-only">Vote down</span>
  </button>
  </div>
  <div class="comment-info">
  <a href="#" class="comment-author">${elm.username}</a>
  ${tag_html(elm)}
  <p class="m-0">${elm.points} points &bull; ${days_ago} days ago</p>
            </div>
          </div>
        </summary>

        <div class="comment-body">
          <p>
            ${elm.content}
          </p>
          <i class="fas fa-trash-alt mx-2 delete_article" id=${
            elm.id
          } onClick="delete_callback(this.id)" aria-hidden="true"></i>
          <i class="fas fa-edit mx-3 edit_article"  id=${
            elm.id
          } onClick="upvote_callback(this.id)" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever=${elm.id} aria-hidden="true"></i>
          <button class="reply_btn" id=${elm.id} type="button">Reply</button>
          <button class="report_btn" id=${elm.id} type="button">Report</button>
        </div>

    `;
  if (elm.reply.length > 0) {
    let reply_div = document.createElement("div");
    reply_div.className = "replies";
    elm.reply.forEach((e) => {
      reply_div.appendChild(threads_card(e));
    });
    details.appendChild(reply_div);
  }
  return details;
}
function fill_threads_container() {
  thread_data.forEach((elm) => {
    theads_container.appendChild(threads_card(elm));
  });
}
fill_threads_container();

// upvote handler function ---------------------
function edit_threads_upvote_helper(elm, id) {
  if (elm.id == id) {
    elm.points++;
    return;
  } else if (elm.reply.length > 0) {
    elm.reply.forEach((e) => {
      edit_threads_upvote_helper(e, id);
    });
  }
}
function upvote_callback(id) {
  thread_data.forEach((elm) => {
    edit_threads_upvote_helper(elm, id);
  });
  theads_container.innerHTML = "";
  fill_threads_container();
}

// downvote helper function ----------------------
function edit_threads_downvote_helper(elm, id) {
  if (elm.id == id) {
    elm.points--;
    return;
  } else if (elm.reply != null && elm.reply.length > 0) {
    elm.reply.forEach((e) => {
      edit_threads_downvote_helper(e, id);
    });
  }
}
function downvote_callback(id) {
  thread_data.forEach((elm) => {
    edit_threads_downvote_helper(elm, id);
  });
  theads_container.innerHTML = "";
  fill_threads_container();
}

//delete helper fucntion--------------
function threads_delete_helper(id, elm) {
  if (elm.id == id) {
    return 0;
  }
  let obj = [];
  if (elm.reply.length > 0) {
    elm.reply.forEach((e) => {
      if (threads_delete_helper(id, e)) {
        obj.push(e);
      }
    });
  }
  elm.reply = obj;
  return 1;
}
function delete_callback(id) {
  let new_thread_data = [];
  thread_data.forEach((elm) => {
    if (threads_delete_helper(id, elm)) {
      new_thread_data.push(elm);
    }
  });
  thread_data = new_thread_data;
  theads_container.innerHTML = "";
  fill_threads_container();
}
// update helper function-------------------

function threads_edit_helper(elm,id,desc_text,tag_text){
    if(elm.id==id){
        
            desc_text.value=elm.content
            tag_text.value=elm.tag
        return ;
    }else if(elm.reply.length>0){
        elm.reply.forEach((e)=>{
            threads_edit_helper(e,id,desc_text,tag_text);
        })
    }
}
let btn_id
var exampleModal = document.getElementById('exampleModal')
let update_btn= document.getElementsByClassName('update_btn')[0];
exampleModal.addEventListener('show.bs.modal', function (event) {
  var button = event.relatedTarget
  var recipient = button.getAttribute('data-bs-whatever')
  let id=parseInt(recipient);
  var description = exampleModal.querySelector('#message-text')
  var tag = exampleModal.querySelector('#recipient-name')
  thread_data.forEach((elm)=>{
    threads_edit_helper(elm,id,description,tag);
  })
  btn_id=id;
})

function threads_update_helper(elm,id,desc_text,tag_text){
    if(elm.id===id){
        console.log(elm);
        elm.content=desc_text.value
        elm.tag=tag_text.value
        return ;
    }else if(elm.reply.length>0){
        elm.reply.forEach((e)=>{
            threads_update_helper(e,id,desc_text,tag_text);
        })
    }
}

update_btn.addEventListener('click',function (event) {
    let id=btn_id;
  var description = exampleModal.querySelector('#message-text')
  var tag = exampleModal.querySelector('#recipient-name')
  thread_data.forEach((elm)=>{
      threads_update_helper(elm,id,description,tag);
    })
  theads_container.innerHTML='';
  fill_threads_container();
})
