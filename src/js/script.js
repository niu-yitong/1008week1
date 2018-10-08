$.ajax({
    url: 'data/data.json',
    success: function(data) {
        if (data.code == 0) {
            renderToDom(data.data);
        }
    }
})

function renderToDom(data) {
    $('.content').html('');
    var str = '';
    $.each(data, function(k, item) {
        str += `<div class='cont'>
                <div class='cont_t'>
                    <div class='cont_t_l'>
                        <input type="checkbox">
                        <span>${item.title}</span>
                    </div>
                    <div class="cont_t_r">
                        <span>${item.day}</span>天
                    </div>
                </div>
                <div class="cont_b">
                    <ol>
                        <li><span>${item.cpu}</span>CPU</li>
                        <li><span>${item.storage}</span>内存</li>
                        <li><span>${item.systemdisk}</span>系统盘</li>
                        <li><span>${item.datadisk}</span>数据盘</li>
                    </ol>
                </div>
            </div>`;
    })
    $('.content').html(str);
}