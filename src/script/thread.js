let theads_container = document.getElementsByClassName("comment-thread")[0];
function tag_html(elm) {
  if (elm.tag != null) {
    return `<span class="badge bg-primary">${elm.tag}</span>`;
  }
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
          } onClick="upvote_callback(this.id)" aria-hidden="true"></i>
          <button class="reply_btn" id=${elm.id} type="button">Reply</button>
          <button class="report_btn" id=${elm.id} type="button">Flag</button>
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
  } else if (elm.reply != null) {
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
function edit_threads_delete_helper(id, elm) {
  if (elm.id == id) {
    console.log(elm);
    return 0;
  }
  let obj = [];
  if (elm.reply.length > 0) {
    elm.reply.forEach((e) => {
      if (edit_threads_delete_helper(id, e)) {
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
    if (edit_threads_delete_helper(id, elm)) {
      new_thread_data.push(elm);
    }
  });
  thread_data = new_thread_data;
  theads_container.innerHTML = "";
  fill_threads_container();
}
