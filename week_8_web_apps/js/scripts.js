/* $(document).ready(function() {

	var newToDoItem = 
	var listTotal = 0 */

function generateListItemHTML() {
	//to do: generate html
	var html = '<li><span class="list-item">' + inputValue + '</span><a href="#" class="todo-remove"></a></li>';

	return html;
	}

function generateEditorHTML() {

	//to do: 
	}

function addToList() {
	var todoInput = $('#todo-item-input');
	var todo = todoInput.val();
	var listItem = generateListItemHTML(todo);
	var todoList = $('#todo-list');

	todoList.append(listItem);
	todoInput.val('');

}

function clearList(){
	$('#todo-list').empty()
	}

function removeItem(){
	$(this).closest('li').remove();
}

function completeItem(){
	//to do
	$(this).addClass('completed');
	}

function clearCompleted(){
	//to do
	$('.completed').closest();

	}

function editListItem(){
	//to do
	}

$('#todo-item-submit').click(addToList);
$('#todo-clear').click(clearList);
$('#todo-list').on('click', '.todo-remove', removeItem);
$('#todo-list').on('click', '.list-item', completeItem);