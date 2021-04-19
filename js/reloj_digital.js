(function(){
    var actualizarHora = function(){
        var fecha = new Date();
        var nombreDias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        var nombreMes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

        var span_diaSemana = document.querySelector('.dia_semana');
        var span_dia = document.querySelector('.dia');
        var span_mes = document.querySelector('.mes');
        var span_year = document.querySelector('.year');
        var span_hora = document.querySelector('.hora');
        var span_minuto = document.querySelector('.minuto');
        var pSegundo = document.querySelector('.segundo');
        var pampm = document.querySelector('.ampm');

        var dia_semana = fecha.getDay();
        var dia = fecha.getDate();
        var mes = fecha.getMonth();
        var year = fecha.getFullYear();
        var hora = fecha.getHours();
        var minuto = fecha.getMinutes();
        var segundo = fecha.getSeconds();
        var ampm;

        if(dia<10){dia='0'+dia;}
        if(segundo<10){segundo='0'+segundo;}
        if(minuto<10){minuto='0'+minuto;}
        if(hora<10){hora='0'+hora}
        (hora<12)?ampm='AM':ampm='PM';

        span_diaSemana.textContent = nombreDias[dia_semana];
        span_dia.textContent = dia;
        span_mes.textContent = nombreMes[mes];
        span_year.textContent = year;
        span_hora.textContent = hora;
        span_minuto.textContent = minuto;
        pSegundo.textContent = segundo;
        pampm.textContent = ampm;
    };
    actualizarHora();
    var intervalo = setInterval(actualizarHora,1000);
}())