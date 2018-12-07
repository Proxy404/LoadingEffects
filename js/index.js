var debug = true;

console.log('loaded');


$(document).ready(function () {


    /* A1 */
    var whoosh = $('#whoosh')[0];

    $('#a1Btn1, #a1Btn2').click(function (withSound) {
        var eff = $(this).closest('.ce-effect-container').find('.ce-effect');

        $(eff).removeClass('ce-run');

        $('#a1Btn1, #a1Btn2').attr('disabled', true);

        $(eff).addClass('ce-run');

        if (this.id == 'a1Btn1') {
            whoosh.play();
        }

        setTimeout(function () {
            // $(eff).removeClass('a1-end').removeClass('a1-run');
            $('#a1Btn1, #a1Btn2').attr('disabled', false);
        }, 4000);
    });


    /* */


    /* G1 */
    var explosion = $('#explosion')[0];

    $('#circular_explosion1, #circular_explosion2').click(function () {

        $('#circular_explosion1, #circular_explosion2').attr('disabled', true);

        var playSound = (this.id == 'circular_explosion1');

        $('.logo-group').addClass('logo-container-animate');
        $('.loader-bar').addClass('loader-bar-animate');

        if (playSound) {
            setTimeout(function () {
                explosion.play();
            }, 500);
        }

        setTimeout(function () {
            $('#circular_explosion1, #circular_explosion2').attr('disabled', false);
            $('.logo-group').removeClass('logo-container-animate');
            $('.loader-bar').removeClass('loader-bar-animate');
        }, 4500);
    });
    /* */




    /* A2 */
    var wil = $('#wil')[0];

    $('#a2Btn1, #a2Btn2').click(function () {

        var playSound = (this.id == 'a2Btn1');

        var eff = $(this).closest('.ce-effect-container').find('.ce-effect');

        $(eff).removeClass('a2-end').removeClass('a2-run');

        $(eff).addClass('a2-run');

        if (playSound) {
            whoosh.play();
        }

        $('#a2Btn1, #a2Btn2').attr('disabled', true);

        setTimeout(function () {
            $(eff).addClass('a2-end');

            if (playSound) {
                setTimeout(function () {
                    wil.play();
                }, 1800);
            }

            setTimeout(function () {
                $(eff).removeClass('a2-end').removeClass('a2-run');
                $('#a2Btn1, #a2Btn2').attr('disabled', false);
            }, 4000);
        }, 2000);
    });
    /* */


    /* Inbox App Text Shadow / Color Transition */

    var thump = $('#thump')[0];

    $('#shadow_transition1, #shadow_transition2').click(function () {

        $('#shadow_transition1, #shadow_transition2').attr('disabled', true);

        if (this.id == 'shadow_transition1') {
            setTimeout(function () {
                thump.play();
            }, 500);
        }

        $('.letters1').addClass('letters1-animate');
        $('.letters2').addClass('letters2-animate');
        setTimeout(function () {
            $('#shadow_transition1, #shadow_transition2').attr('disabled', false);
            $('.letters1').removeClass('letters1-animate');
            $('.letters2').removeClass('letters2-animate');
        }, 3000);
    });


    /* A3 */

    $('#a3Btn1, #a3Btn2').click(function () {

        $('.a3 .ce-effect').removeClass('ce-run');

        $('#a3Btn1, #a3Btn2').attr('disabled', true);

        $('.a3 .ce-effect').addClass('ce-run');

        setTimeout(function () {
            $('#a3Btn1, #a3Btn2').attr('disabled', false);

            // $('.a3 .envelope').removeClass('envelope-animate');

        }, 4000);
    });



    /* G3 */

    $('#g3').click(function () {

        $('#g3').attr('disabled', true);

        $('.cover').addClass('cover-animate');
        $('.letters').addClass('letters-animate');
        setTimeout(function () {
            $('#g3').attr('disabled', false);
            $('.letters').removeClass('letters-animate');
            $('.cover').removeClass('cover-animate');
        }, 20000);
    });


    /* G4 */
    $('#g4').click(function () {

        $('#g4').attr('disabled', true);

        $('.g4-env-square').addClass('g4-env-square-animate');

        $('.g4-i').addClass('g4-i-animate');
        $('.g4-n').addClass('g4-n-animate');
        $('.g4-b').addClass('g4-b-animate');
        $('.g4-o').addClass('g4-o-animate');

        setTimeout(function() {
            $('#g4').attr('disabled', false);
        }, 5500);
    });

    $('#g4-reset').click(function () {
        $('.g4-env-square').removeClass('g4-env-square-animate');

        $('.g4-i').removeClass('g4-i-animate');
        $('.g4-n').removeClass('g4-n-animate');
        $('.g4-b').removeClass('g4-b-animate');
        $('.g4-o').removeClass('g4-o-animate');
    });


    /* G5 */
    $('#g5').click(function () {

        $('#g5').attr('disabled', true);

        $('.g5-env-square').addClass('g5-env-square-animate');
        $('.g5-flap2').addClass('g5-flap2-animate');

        $('.g5-i').addClass('g5-i-animate');
        $('.g5-n').addClass('g5-n-animate');
        $('.g5-b').addClass('g5-b-animate');
        $('.g5-o').addClass('g5-o-animate');

        setTimeout(function() {
            $('#g5').attr('disabled', false);
        }, 5500);
    });

    $('#g5-reset').click(function () {
        $('.g5-env-square').removeClass('g5-env-square-animate');
        $('.g5-flap2').removeClass('g5-flap2-animate');

        $('.g5-i').removeClass('g5-i-animate');
        $('.g5-n').removeClass('g5-n-animate');
        $('.g5-b').removeClass('g5-b-animate');
        $('.g5-o').removeClass('g5-o-animate');
    });


    /* G6 */
    $('#circular_explosion3').click(function () {

        $('#circular_explosion3').attr('disabled', true);
        $('.logo-group2').addClass('logo-container-animate2');
        $('.logo-group3').addClass('logo-container-animate3');

        setTimeout(function () {
            $('#circular_explosion3').attr('disabled', false);
            $('.logo-group2').removeClass('logo-container-animate2');
            $('.logo-group3').removeClass('logo-container-animate3');
        }, 9000);
    });


    /* G7 */
    $('#g7-start').click(function () {
        $('#g7-start').attr('disabled', true);
        $('.g7-i').addClass('g7-i-animate');
    });

    $('#g7-reset').click(function () {
        $('#g7-start').attr('disabled', false);
        $('.g7-i').removeClass('g7-i-animate');
    });
    
    
    $('#a4Btn1').click(function () {

        $('.a4 .ce-effect').removeClass('ce-run1').removeClass('ce-run2');
        
        $('#a4Btn1, #a4Btn2').attr('disabled', true);

        $('.a4 .ce-effect').addClass('ce-run1');
        
        setTimeout(function () {
            
            $('#a4Btn1, #a4Btn2').attr('disabled', false);
            
            
        }, 4000);
    });
    
    $('#a4Btn2').click(function () {

        $('.a4 .ce-effect').removeClass('ce-run1').removeClass('ce-run2');
        
        $('#a4Btn1, #a4Btn2').attr('disabled', true);

        $('.a4 .ce-effect').addClass('ce-run2');
        
        setTimeout(function () {
            
            $('#a4Btn1, #a4Btn2').attr('disabled', false);
            
            
        }, 4000);
    });
    
    
    
    
    
    


    /* G8 */
    $('#g8-start').click(function () {
        $('#g8-start').attr('disabled', true);
        $('.left-eye').addClass('left-eye-animate');
        $('.right-eye').addClass('right-eye-animate');

        $('.mouth').addClass('mouth-animate');

        $('.pillow').addClass('pillow-animate');
    });

    $('#g8-reset').click(function () {
        $('#g8-start').attr('disabled', false);
        $('.left-eye').removeClass('left-eye-animate');
        $('.right-eye').removeClass('right-eye-animate');

        $('.mouth').removeClass('mouth-animate');

        $('.pillow').removeClass('pillow-animate');
    });



});

/* Mouse Effect */
var PI2 = Math.PI * 2;
var HALF_PI = Math.PI / 2;

var _ = {};

var isTouch = 'ontouchstart' in window;
var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);

function Canvas(options) {
    options = _.clone(options || {});
    this.options = _.defaults(options, this.options);

    this.el = this.options.el;
    this.ctx = this.el.getContext('2d');

    this.dpr = window.devicePixelRatio || 1;

    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this), false);
    this.resetTarget();

    if (isTouch) {
        // touch
        this.el.addEventListener('touchstart', this.touchMove.bind(this), false);
        this.el.addEventListener('touchmove', this.touchMove.bind(this), false);
        //   	this.el.addEventListener('touchend', this.resetTarget.bind(this), false);
    } else {
        // Mouse
        window.addEventListener('mousemove', this.mouseMove.bind(this), false);
        window.addEventListener('mouseout', this.resetTarget.bind(this), false);
    }

    this.setupParticles();

    this.loop();
}

Canvas.prototype.updateDimensions = function () {
    this.width = this.el.width = _.result(this.options, 'width') * this.dpr;
    this.height = this.el.height = _.result(this.options, 'height') * this.dpr;
    this.el.style.width = _.result(this.options, 'width') + 'px';
    this.el.style.height = _.result(this.options, 'height') + 'px';
}

// Update the orb target
Canvas.prototype.mouseMove = function (event) {
    this.target = new Vector(event.clientX * this.dpr, event.clientY * this.dpr);
}

// Reset to center when we mouse out
Canvas.prototype.resetTarget = function () {
    this.target = new Vector(this.width / 2, this.height / 2);
}

// Touch Eent
Canvas.prototype.touchMove = function (event) {
    if (event.touches.length === 1) { event.preventDefault(); }

    this.target = new Vector(event.touches[0].pageX * this.dpr, event.touches[0].pageY * this.dpr);
}

// Defaults
Canvas.prototype.options = {
    count: 20,
    speed: 0.5,
    width: 400,
    height: 400,
    size: 10,
    radius: 5,
    background: '29, 22, 52',
    maxDistance: 100
}

Canvas.prototype.setupParticles = function () {
    this.particles = [];
    var index = -1;
    var between = PI2 / this.options.count;
    while (++index < this.options.count) {
        var x;
        var y;
        var angle;
        var max = Math.max(this.width, this.height);

        angle = (index + 1) * between;

        x = Math.cos(angle) * max;
        x += this.width / 2;

        y = Math.sin(angle) * max;
        y += this.height / 2;

        var particle = new Particle({
            x: x,
            y: y,
            radius: this.options.radius,
            size: this.options.size,
            angle: angle,
            color: this.options.color
        });

        this.particles.push(particle);
    }
}

Canvas.prototype.findClosest = function () {
    var index = -1;
    var pointsLength = this.particles.length;

    while (++index < pointsLength) {
        var closestIndex = -1;
        this.particles[index].closest = [];

        while (++closestIndex < pointsLength) {
            var closest = this.particles[closestIndex];
            var distance = this.particles[index].position.distanceTo(closest.position);
            if (distance < this.options.maxDistance) {
                var vector = new Vector(closest.position.x, closest.position.y);
                vector.opacity = 1 - (distance / this.options.maxDistance);
                vector.distance = distance;
                this.particles[index].closest.push(vector);
            }
        }
    }
}

Canvas.prototype.loop = function () {
    //   this.clear();
    if (isTouch || isSafari) {
        this.ghost();
    } else {
        this.ghostGradient();
    }
    if (this.options.maxDistance > 0) {
        this.findClosest();
    }
    this.draw();

    window.requestAnimationFrame(_.bind(this.loop, this));
}

Canvas.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.width, this.height);
}

Canvas.prototype.ghost = function () {
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.rect(0, 0, this.width, this.height);
    if (typeof this.options.background === 'string') {
        this.ctx.fillStyle = "rgb(" + this.options.background + ")";
    } else {
        this.ctx.fillStyle = "rgb(" + this.options.background[0] + ")";
    }

    this.ctx.fill();
}

Canvas.prototype.ghostGradient = function () {
    var gradient;

    if (typeof this.options.background === 'string') {
        this.ctx.fillStyle = 'rgb(' + this.options.background + ')';
    } else {
        var gradient = this.ctx.createRadialGradient(this.width / 2, this.height / 2, 0, this.width / 2, this.height / 2, Math.max(this.width, this.height) / 2);

        var length = this.options.background.length;
        for (var i = 0; i < length; i++) {
            gradient.addColorStop((i + 1) / length, 'rgb(' + this.options.background[i] + ')');
        }
        this.ctx.fillStyle = gradient;
    }

    this.ctx.globalOpacity = 0.1;
    this.ctx.globalCompositeOperation = "darken";
    this.ctx.fillRect(0, 0, this.width, this.height);
}

// Draw
Canvas.prototype.draw = function () {
    var index = -1;
    var length = this.particles.length;
    while (++index < length) {
        var point = this.particles[index];
        var color = point.color || this.options.color;
        point.update(this.target, index);

        this.ctx.globalAlpha = 0.3;
        this.ctx.globalCompositeOperation = "lighten";
        this.ctx.fillStyle = 'rgb(' + color + ')';
        this.ctx.beginPath();
        this.ctx.arc(point.position.x, point.position.y, point.size, 0, PI2, false);
        this.ctx.closePath();
        this.ctx.fill();

        if (this.options.maxDistance > 0) {
            this.drawLines(point, color);
        }
    }
}

// Draw connecting lines
Canvas.prototype.drawLines = function (point, color) {
    color = color || this.options.color;
    var index = -1;
    var length = point.closest.length;
    this.ctx.globalAlpha = 0.2;
    this.ctx.globalCompositeOperation = "screen";
    this.ctx.lineCap = 'round';
    while (++index < length) {
        this.ctx.lineWidth = (point.size * 2) * point.closest[index].opacity;
        this.ctx.strokeStyle = 'rgba(' + color + ', ' + point.closest[index].opacity + ')';
        this.ctx.beginPath();
        this.ctx.moveTo(point.position.x, point.position.y);
        this.ctx.lineTo(point.closest[index].x, point.closest[index].y);
        this.ctx.stroke();
    }
}

function Particle(options) {
    options = _.clone(options || {});
    this.options = _.defaults(options, this.options);

    this.position = this.shift = new Vector(this.options.x, this.options.y);

    this.speed = this.options.speed || 0.01 + Math.random() * 0.04;

    this.angle = this.options.angle || 0;

    if (this.options.color) {
        var color = this.options.color.split(',');
        var colorIndex = -1;
        while (++colorIndex < 3) {
            color[colorIndex] = Math.round(parseInt(color[colorIndex], 10) + (Math.random() * 100) - 50);

            // Clamp
            color[colorIndex] = Math.min(color[colorIndex], 255);
            color[colorIndex] = Math.max(color[colorIndex], 0);
        }
        this.color = color.join(', ');
    }

    // Size
    this.options.size = this.options.size || 7;
    this.size = 1 + Math.random() * this.options.size;
    this.targetSize = this.options.targetSize || this.options.size;

    this.orbit = this.options.radius * 0.5 + (this.options.radius * 0.5 * Math.random());
}

Particle.prototype.update = function (target, index) {
    this.angle += this.speed;

    this.shift.x += (target.x - this.shift.x) * this.speed;
    this.shift.y += (target.y - this.shift.y) * this.speed;

    this.position.x = this.shift.x + Math.cos(index + this.angle) * this.orbit;
    this.position.y = this.shift.y + Math.sin(index + this.angle) * this.orbit;

    if (!isSafari) {
        this.size += (this.targetSize - this.size) * 0.03;

        if (Math.round(this.size) === Math.round(this.targetSize)) {
            this.targetSize = 1 + Math.random() * this.options.size;
        }
    }
}

function Vector(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector.prototype.distanceTo = function (vector, abs) {
    var distance = Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
    return abs || false ? Math.abs(distance) : distance;
};

new Canvas({
    el: document.getElementById('ce-canvas'),

    count: 25,
    speed: 0.3,
    radius: 6,
    width: function () { return window.innerWidth; },
    height: function () { return window.innerHeight; },
    size: 15,
    color: '30, 180, 1',
    maxDistance: 100,
    background: ['1, 62, 66', '1, 40, 60']
});
/* */
