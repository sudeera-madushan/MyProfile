
function viewHomeForm(){
    $('#homeSection').css("display","inherit")
    $('#customerSection').css("display","none")
    $('#itemSection').css("display","none")
    $('#orderSection').css("display","none")
}
function viewItemForm(){
    $('#homeSection').css("display","none")
    $('#customerSection').css("display","none")
    $('#orderSection').css("display","none")
    $('#itemSection').css("display","inherit")
}
function viewOrderForm(){
    $('#homeSection').css("display","none")
    $('#customerSection').css("display","none")
    $('#itemSection').css("display","none")
    $('#orderSection').css("display","inherit")

    let id="OR-0000";
    let orders = JSON.parse(localStorage.getItem("ORDERS"));
    if (orders){
        let number = orders.length;
        id = "OR-" + String(number).padStart(4, '0');
    }
    $('#orderIdO').val(id);
}



$('#navViewHome').click(viewHomeForm);
$('#navViewItem').click(viewItemForm);
$('#navViewOrders').click(viewOrderForm);
$('#btnViewItems').click(viewItemForm);
$('#btnViewOrders').click(viewOrderForm);
