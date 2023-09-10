<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6LZNJC53FB"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-6LZNJC53FB');
    </script>
    <meta charset="UTF-8">
		<link rel="shortcut icon" type="image/jpg" href="assets/img/ico/Placemap.ico"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>

    <title>PlaceMap</title>
  </head>
  <body>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">
          <img src="assets/img/img/Placemap.png" alt="Placemap" height="30px" class="d-inline-block align-text-top">
          PlaceMap
        </a>        
      </div>
    </nav>
    <main>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Me gusta</th>
                <th scope="col">No me gusta</th>
            </tr>
        </thead>
        <tbody>
            <?php

                include("conexion.php");

                // Bucle while que recorre cada registro y muestra cada campo en la tabla.
                while ($columna = mysqli_fetch_array( $resultado ))
                {
            ?>
            <tr>
                <td><?php echo $columna['me_gusta'];?></td>
                <td><?php echo $columna['no_me_gusta'];?></td>
            </tr>
            <?php
                }
            ?>
        </tbody>
    </table>
   </main>
  </body>
</html>