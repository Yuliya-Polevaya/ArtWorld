<?php
class Route
{
    static function getRoute($route)
    {
        if($route === '/ArtWorld/myserver/get')
            require 'get.php';
        elseif($route === '/ArtWorld/myserver/post')
            require 'post.php';
        else
            require '404.php';
    }
}