function saveComment() {
    var commentInput = document.getElementById('commentInput').value;
    var commentList = document.getElementById('commentList');

    var currentDate = new Date().toLocaleDateString();

    var newComment = document.createElement('li');
    var profilePhoto = document.createElement('img');
    profilePhoto.src = "person.jpeg";
    profilePhoto.alt = "Profile";
    profilePhoto.className = "userImage";
    profilePhoto.width = 50; 
    profilePhoto.height = 51; 

    var nameSpan = document.createElement('span');
    nameSpan.textContent = "Kashish";
    var dateSpan = document.createElement('span');
    dateSpan.textContent = currentDate;

    var newCommentInput = document.createElement('textarea');
        newCommentInput.id = 'commentInput';
        newCommentInput.value = commentInput;
    
    var commentIcons = document.createElement('div');

    var deleteComment = document.createElement('img');
        deleteComment.src = "https://smallimg.pngkey.com/png/small/16-161807_free-icons-png-red-trash-can-icon.png";
        deleteComment.className = 'delete'
        deleteComment.width = 30;
        deleteComment.height = 30;

    deleteComment.addEventListener('click', function () {
        commentList.removeChild(newComment);
    });

    var likeComment = document.createElement('img');
        likeComment.src = "https://cdn-icons-png.flaticon.com/256/889/889221.png";
        likeComment.className = 'like';
        likeComment.width = 30;
        likeComment.height = 30;

        var likeCount=0;
        var likeCountElement = document.createElement('span');
        likeCountElement.textContent = likeCount;
    
        likeComment.addEventListener('click', function() {
            likeCount++;
            likeCountElement.textContent = likeCount;
        });

        commentIcons.appendChild(likeComment);
        commentIcons.appendChild(likeCountElement);
        commentIcons.appendChild(deleteComment);

    newComment.appendChild(profilePhoto);
    newComment.appendChild(newCommentInput);
    newComment.appendChild(document.createElement('br'));
    newComment.appendChild(nameSpan);
    newComment.appendChild(document.createElement('br'));
    newComment.appendChild(dateSpan);
    commentList.appendChild(newComment);
    newComment.appendChild(commentIcons);

    document.getElementById('commentInput').value = '';
}

function cancelComment() {
    
    document.getElementById('commentInput').value = '';
}
