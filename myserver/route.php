<?php
class Route
{
    static function getRoute($route)
    {
        if ($route === '/ArtWorld/myserver/get')
            require 'get.php';

        elseif ($route === '/ArtWorld/myserver/post_message')
            require 'post_message.php';

        elseif ($route === '/ArtWorld/myserver/post_mailing')
            require 'post_mailing.php';

        else
            require '404.php';
    }
}