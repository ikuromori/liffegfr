var params = (new URL(document.location)).searchParams;

$(function () {
    $('form').submit(function () {
        var creatinine = $('textarea[name="creatinine"]').val();
        var aged = $('textarea[name="aged"]').val();
        var sex = $('radio[name="sex"]').val();        
        var msg = `'クレアチニン'+${creatinine}\n'年齢'+${aged}\n'性別'+${sex}`;
        sendText(msg);
        return false;
    });
});
