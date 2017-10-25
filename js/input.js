"use strict";

function _E (e) {
	return document.createElement(e);
}

function _ID (e) {
	return document.getElementById(e);
}

function _ALL (e) {
	return document.querySelectorAll(e);
}

var list;

function app () {

	/* Form data handling */
	(function(){
		var p = document.querySelectorAll('.fileinp'),
			ar = Array.prototype.slice.call(p);
		ar.forEach(function(arg) {
			var storedFiles = [],
				list = arg.parentNode.querySelector('.file_list') || _ID(arg.getAttribute('rel'));

			function updateStoredFiles (e) {
				var f = e.target.files,
					fn = Array.prototype.slice.call(f),
					totalSize = 0;
				storedFiles = [];
				if(list && list.childNodes && list.childNodes.length == 0)
				{
					list.innerHTML = "";
				}
				fn.forEach( function(f) {
					totalSize += f.size;
					if (totalSize > 20971520) return;
					if (storedFiles.length >= 12) return;
					var	read = new FileReader();
					var fileName = f.name,
						parts, ext = ( parts = fileName.split("/").pop().split(".") ).length > 1 ? parts.pop() : "";
					storedFiles.push(f);
					read.readAsDataURL(f);
					read.onload = function(e){
						var src = e.target.result,
							li = _E('li'),
							link = _E('a'),
							span = _E('span'),
							span2 = _E('span'),
							spanDone = _E('span'),
							image = _E('img'),
							img = _E('span'),
							text = document.createTextNode(f.name),
							text2 = document.createTextNode(ext),
							textDelete = document.createTextNode('Удалить');
						li.className = "file_wrapper";
						link.className = "file_rm";
						image.className = "file_image";
						span.className = "file_name";
						span2.className = "ext_name";
						spanDone.className = "complete";
						img.className = "file_img";
						link.href = "delete";
						link.title = "Удалить";
						li.title = f.name;
						link.addEventListener('click', recountStoredFiles);
						image.src = src;
						//img.appendChild(image);
						if(ext == 'png' || ext == 'jpg') {
							img.appendChild(image);
						} else {
							img.appendChild(span2);
						}
						img.appendChild(span);
						span.appendChild(text);
						span2.appendChild(text2);
						link.appendChild(textDelete);
						li.appendChild(img);
						li.appendChild(spanDone);
						li.appendChild(link);
						list.appendChild(li);
						addCl(li);
					};
				});
			}

			/* Delete file view from list and pop out of storedFiles */

			function recountStoredFiles (e) {
				e.preventDefault();
				var p = $(e.target).closest('li'),
					n = p.index();
				p.remove();
				storedFiles.splice(n, 1);
			}

			arg.addEventListener('change', updateStoredFiles);
		});

		//file && file.addEventListener('change', updateStoredFiles);
		//main_file && main_file.addEventListener('change', second_updateStoredFiles);

	})();

	window.removeEventListener('load', app);
}

// Add clases for animation
function addCl(el) {
	setTimeout(function() {
		el.classList.add("progress");
	}, 10)
	setTimeout(function() {
		el.classList.add("done");
	}, 2000)
}

document.querySelectorAll('.fileinp').length && window.addEventListener('load', app);

// ajax delete photo
function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}
// int $property_id
function deleteFile (property_id, obj)
{
	var r  = new XMLHttpRequest(),
		data = new FormData();

	data.append('ajax_delete_file', property_id);
	r.open('POST', './', true);
	r.onreadystatechange = function() {
		if((r.status == 200) && (r.readyState == 4)) {
			var parent = findAncestor(obj, 'file_wrapper');
			parent.parentNode.removeChild(parent);
		}
	};
	r.send(data);
}