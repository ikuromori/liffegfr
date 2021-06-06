var params = (new URL(document.location)).searchParams;

$(function () {
    $('form').submit(function () {
        var creatinine = $('textarea[name="creatinine"]').val();
        var aged = $('textarea[name="aged"]').val();
        var sex = $('input[name="sex"]:checked').val();        
        var msg = `クレアチニン:${creatinine}\n年齢:${aged}\n性別:${sex}`;
        sendText(msg);
        return false;
    });
});
