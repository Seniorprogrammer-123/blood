<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <title>Blood Test</title>
    <link rel="stylesheet" href="/css/sheduler.css">
    <link rel="stylesheet" href="/css/variables.scss">
    <link rel="stylesheet" href="/css/custom.css">
    <!-- bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>
    <!-- <div class="container">
    <div class="row justify-content-center">
        <div className="col-lg-8 col-md-8 col-sm-8 col-xl-8">
            <h1 id="appname">FORUMULARIO SIMPLIFICADO MUESTARS PCR<br />WWW.PCRCHILE.CL - V.1.0</h1>
            <img id="logo" src="img/logo.jpg" /><img id="mark" src="img/seremi-salud.jpg" />
        </div>                
    </div>
    </div> -->
    <div id="app" class="col-lg-12"></div>
    <script src="/js/app.js"></script>
    <script src="/js/custom.js"></script>
</body>
</html>