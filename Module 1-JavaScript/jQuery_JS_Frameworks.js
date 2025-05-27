<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Tasks</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <button id="registerBtn">Register</button>
    <div class="eventCard" style="display: none;">Event</div>
    <script>
        $('#registerBtn').click(function () {
            $('.eventCard').fadeIn();
        });

        setTimeout(() => {
            $('.eventCard').fadeOut();
        }, 3000);
    </script>
</body>
</html>
