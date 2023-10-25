controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(alien)
    sprites.destroy(alien, effects.fire, 200)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.warmRadial, 500)
    info.changeLifeBy(-1)
})
let alien: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    ..ccc.........ffffff....
    ..f4cc.......fcc22ff....
    ..f44cc...fffccccff.....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf2222226822222b999c..
    .c22c222265582b11199b2c.
    f22ccccccc682299111b222c
    fffffcc222c222222222222f
    .....f2222442222222222f.
    ....f222244fc2222222ff..
    ...c222244ffffffffff....
    ...c2222cff.............
    ...fffffff..............
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    alien = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 6 6 . . . . . . . 
        . . . . . . 6 7 7 6 . . . . . . 
        . . . . . 6 6 7 f 7 6 . . . . . 
        . . 1 1 6 7 6 6 7 6 6 6 1 1 . . 
        1 1 1 1 1 1 7 7 7 1 1 1 1 1 1 1 
        . 1 1 1 1 1 1 1 7 1 1 1 1 1 1 . 
        . . . 1 1 7 7 7 7 1 1 1 1 . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    alien.setVelocity(-100, 0)
    alien.setPosition(160, randint(0, 120))
})
