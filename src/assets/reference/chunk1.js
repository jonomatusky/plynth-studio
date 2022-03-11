;(this['webpackJsonppictarize-serve'] =
  this['webpackJsonppictarize-serve'] || []).push([
  [0],
  {
    107: function (e, t) {},
    109: function (e, t) {},
    133: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = n(7),
        a = n.n(r),
        i = n(63),
        s = n.n(i),
        o = (n(77), n(17)),
        c = n(35),
        u = n.n(c),
        l = n(138),
        p = n(135),
        d = n(64),
        h = n(8),
        f = n.n(h),
        m = n(11),
        v = n(72),
        b = n(0),
        g = n(65),
        y = n(66),
        j = function (e, t) {
          var n = new b.Color(t)
          return new b.ShaderMaterial({
            uniforms: {
              tex: { type: 't', value: e },
              color: { type: 'c', value: n },
            },
            vertexShader:
              'varying mediump vec2 vUv;\nvoid main(void)\n{\nvUv = uv;\nmediump vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}',
            fragmentShader:
              'uniform mediump sampler2D tex;\nuniform mediump vec3 color;\nvarying mediump vec2 vUv;\nvoid main(void)\n{\n  mediump vec3 tColor = texture2D( tex, vUv ).rgb;\n  mediump float a = (length(tColor - color) - 0.5) * 7.0;\n  gl_FragColor = vec4(tColor, a);\n}',
            transparent: !0,
          })
        },
        w = {},
        x = null,
        O = (function () {
          var e = Object(m.a)(
            f.a.mark(function e() {
              var t, n
              return f.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!x) {
                        e.next = 2
                        break
                      }
                      return e.abrupt('return', x)
                    case 2:
                      return (
                        (t = new g.a()).setDecoderPath(
                          'https://www.gstatic.com/draco/versioned/decoders/1.4.1/'
                        ),
                        (n = new y.a()).setDRACOLoader(t),
                        (x = n),
                        e.abrupt('return', x)
                      )
                    case 8:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function () {
            return e.apply(this, arguments)
          }
        })(),
        k = (function () {
          var e = Object(m.a)(
            f.a.mark(function e(t) {
              var n, r
              return f.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (w[t]) {
                        e.next = 10
                        break
                      }
                      return (e.next = 3), fetch(t)
                    case 3:
                      if (200 === (n = e.sent).status) {
                        e.next = 6
                        break
                      }
                      throw t
                    case 6:
                      return (e.next = 8), n.blob()
                    case 8:
                      ;(r = e.sent), (w[t] = r)
                    case 10:
                      return e.abrupt('return', w[t])
                    case 11:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        S = function (e) {
          return new Promise(
            (function () {
              var t = Object(m.a)(
                f.a.mark(function t(n, r) {
                  var a, i
                  return f.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          e.type.match('image.*') || r(),
                            (a =
                              document.createElement('img')).addEventListener(
                              'load',
                              function () {
                                n(a)
                              }
                            ),
                            (i = new FileReader()).addEventListener(
                              'load',
                              (function () {
                                var e = Object(m.a)(
                                  f.a.mark(function e(t) {
                                    var n
                                    return f.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            ;(n = t.target.result), (a.src = n)
                                          case 2:
                                          case 'end':
                                            return e.stop()
                                        }
                                    }, e)
                                  })
                                )
                                return function (t) {
                                  return e.apply(this, arguments)
                                }
                              })()
                            ),
                            i.readAsDataURL(e)
                        case 6:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function (e, n) {
                return t.apply(this, arguments)
              }
            })()
          )
        },
        E = function (e) {
          return new Promise(
            (function () {
              var t = Object(m.a)(
                f.a.mark(function t(n, r) {
                  var a, i
                  return f.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          ;(a = document.createElement('video')).setAttribute(
                            'playsinline',
                            ''
                          ),
                            a.addEventListener('loadedmetadata', function () {
                              n(a)
                            }),
                            (i = new FileReader()).addEventListener(
                              'load',
                              (function () {
                                var e = Object(m.a)(
                                  f.a.mark(function e(t) {
                                    var n
                                    return f.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            ;(n = t.target.result), (a.src = n)
                                          case 2:
                                          case 'end':
                                            return e.stop()
                                        }
                                    }, e)
                                  })
                                )
                                return function (t) {
                                  return e.apply(this, arguments)
                                }
                              })()
                            ),
                            i.readAsDataURL(e)
                        case 6:
                        case 'end':
                          return t.stop()
                      }
                  }, t)
                })
              )
              return function (e, n) {
                return t.apply(this, arguments)
              }
            })()
          )
        },
        C = (function () {
          var e = Object(m.a)(
            f.a.mark(function e(t, n) {
              var r, a, i, s, o, c
              return f.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), E(t)
                    case 2:
                      return (
                        (r = e.sent),
                        ((a = new b.VideoTexture(r)).needsUpdate = !0),
                        n || (n = r.width / r.height),
                        1,
                        (i = 1 / n),
                        (s = new b.PlaneGeometry(1, 1)),
                        ((o = new b.MeshStandardMaterial()).metalness = 1),
                        (o.map = a),
                        (o.flatShading = !0),
                        (o.side = b.DoubleSide),
                        (c = new b.Mesh(s, o)).scale.set(1, i, 1),
                        e.abrupt('return', c)
                      )
                    case 17:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })(),
        T = (function () {
          var e = Object(m.a)(
            f.a.mark(function e(t, n, r) {
              var a, i, s, o, c, u
              return f.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(t instanceof HTMLImageElement)) {
                        e.next = 4
                        break
                      }
                      ;(e.t0 = t), (e.next = 7)
                      break
                    case 4:
                      return (e.next = 6), S(t)
                    case 6:
                      e.t0 = e.sent
                    case 7:
                      return (
                        (a = e.t0),
                        ((i = new b.Texture(a)).needsUpdate = !0),
                        n || (n = a.width / a.height),
                        1,
                        (s = 1 / n),
                        (o = new b.PlaneGeometry(1, 1)),
                        (c = j(i, r)),
                        (u = new b.Mesh(o, c)).scale.set(1, s, 1),
                        e.abrupt('return', u)
                      )
                    case 18:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, n, r) {
            return e.apply(this, arguments)
          }
        })(),
        A = (function () {
          var e = Object(m.a)(
            f.a.mark(function e(t, n) {
              var r, a, i, s, o, c
              return f.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(t instanceof HTMLImageElement)) {
                        e.next = 4
                        break
                      }
                      ;(r = t), (e.next = 7)
                      break
                    case 4:
                      return (e.next = 6), S(t)
                    case 6:
                      r = e.sent
                    case 7:
                      return (
                        ((a = new b.Texture(r)).encoding = b.sRGBEncoding),
                        (a.needsUpdate = !0),
                        n || (n = r.width / r.height),
                        1,
                        (i = 1 / n),
                        (s = new b.PlaneGeometry(1, 1)),
                        ((o = new b.MeshBasicMaterial()).map = a),
                        (o.flatShading = !0),
                        (o.transparent = !0),
                        (o.side = b.DoubleSide),
                        (c = new b.Mesh(s, o)).scale.set(1, i, 1),
                        e.abrupt('return', c)
                      )
                    case 22:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })(),
        M = (function () {
          var e = Object(m.a)(
            f.a.mark(function e(t, n) {
              var r, a, i, s, o
              return f.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), S(t)
                    case 2:
                      return (
                        (r = e.sent),
                        n || (n = r.width / r.height),
                        1,
                        (a = 1 / n),
                        ((i = new b.Texture(r)).needsUpdate = !0),
                        (s = new b.SpriteMaterial({ map: i })),
                        (o = new b.Sprite(s)).scale.set(1, a, 1),
                        e.abrupt('return', o)
                      )
                    case 12:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function (t, n) {
            return e.apply(this, arguments)
          }
        })(),
        P = {
          loadBlobFromURL: k,
          loadImageFromURL: function (e) {
            return new Promise(function (t, n) {
              var r = new Image()
              ;(r.crossOrigin = 'anonymous'),
                (r.src = e),
                r.addEventListener('load', function () {
                  t(r)
                })
            })
          },
          loadImage: S,
          loadVideo: E,
          loadFileSrc: function (e) {
            return new Promise(
              (function () {
                var t = Object(m.a)(
                  f.a.mark(function t(n, r) {
                    var a
                    return f.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            ;(a = new FileReader()).addEventListener(
                              'load',
                              (function () {
                                var e = Object(m.a)(
                                  f.a.mark(function e(t) {
                                    return f.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            n(t.target.result)
                                          case 1:
                                          case 'end':
                                            return e.stop()
                                        }
                                    }, e)
                                  })
                                )
                                return function (t) {
                                  return e.apply(this, arguments)
                                }
                              })()
                            ),
                              a.readAsDataURL(e)
                          case 3:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e, n) {
                  return t.apply(this, arguments)
                }
              })()
            )
          },
          loadGLBModel: function (e, t) {
            return new Promise(
              (function () {
                var t = Object(m.a)(
                  f.a.mark(function t(n, r) {
                    var a
                    return f.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            ;(a = new FileReader()).addEventListener(
                              'load',
                              (function () {
                                var e = Object(m.a)(
                                  f.a.mark(function e(t) {
                                    var r
                                    return f.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (r = t.target.result),
                                              (e.next = 3),
                                              O()
                                            )
                                          case 3:
                                            e.sent.parse(r, '', function (e) {
                                              var t,
                                                r = e.scene
                                              ;(t = r.animations).push.apply(
                                                t,
                                                Object(v.a)(e.animations)
                                              ),
                                                n(r)
                                            })
                                          case 5:
                                          case 'end':
                                            return e.stop()
                                        }
                                    }, e)
                                  })
                                )
                                return function (t) {
                                  return e.apply(this, arguments)
                                }
                              })()
                            ),
                              a.readAsArrayBuffer(e)
                          case 3:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e, n) {
                  return t.apply(this, arguments)
                }
              })()
            )
          },
          loadImageAsMesh: A,
          loadImageAsSpriteMesh: M,
          loadImageAsChromaMesh: T,
          loadVideoAsMesh: C,
        },
        D = {
          disposeObject: function (e) {
            e.traverse(function (e) {
              if ((e.geometry && e.geometry.dispose(), e.material))
                if (e.material.length)
                  for (var t = 0; t < e.material.length; ++t)
                    e.material[t].map && e.material[t].map.dispose(),
                      e.material[t].dispose()
                else
                  e.material.map && e.material.map.dispose(),
                    e.material.dispose()
            })
          },
        },
        R = {
          DEFAULT_WIDTH: 1e3,
          DEFAULT_EMBED_WIDTH: 1e3,
          DEFAULT_EMBED_HEIGHT: 562.5,
        }
      function L(e, t) {
        ;(this.enabled = !0),
          (this.center = new b.Vector3()),
          (this.panSpeed = 0.002),
          (this.zoomSpeed = 0.1),
          (this.rotationSpeed = 0.005)
        var n = this,
          r = new b.Vector3(),
          a = new b.Vector3(),
          i = new b.Box3(),
          s = -1,
          o = 0,
          c = 1,
          u = 2,
          l = s,
          p = this.center,
          d = new b.Matrix3(),
          h = new b.Vector2(),
          f = new b.Vector2(),
          m = new b.Spherical(),
          v = new b.Sphere(),
          g = { type: 'change' }
        function y(e) {
          if (!1 !== n.enabled) {
            switch (e.pointerType) {
              case 'mouse':
              case 'pen':
                !(function (e) {
                  0 === e.button
                    ? (l = o)
                    : 1 === e.button
                    ? (l = c)
                    : 2 === e.button && (l = u)
                  f.set(e.clientX, e.clientY)
                })(e)
            }
            t.ownerDocument.addEventListener('pointermove', j, !1),
              t.ownerDocument.addEventListener('pointerup', w, !1)
          }
        }
        function j(e) {
          if (!1 !== n.enabled)
            switch (e.pointerType) {
              case 'mouse':
              case 'pen':
                !(function (e) {
                  h.set(e.clientX, e.clientY)
                  var t = h.x - f.x,
                    r = h.y - f.y
                  l === o
                    ? n.rotate(a.set(-t, -r, 0))
                    : l === c
                    ? n.zoom(a.set(0, 0, r))
                    : l === u && n.pan(a.set(-t, r, 0))
                  f.set(e.clientX, e.clientY)
                })(e)
            }
        }
        function w(e) {
          switch (e.pointerType) {
            case 'mouse':
            case 'pen':
              x()
          }
          t.ownerDocument.removeEventListener('pointermove', j, !1),
            t.ownerDocument.removeEventListener('pointerup', w, !1)
        }
        function x() {
          l = s
        }
        function O(e) {
          !1 !== n.enabled &&
            (e.preventDefault(), n.zoom(a.set(0, 0, e.deltaY > 0 ? 1 : -1)))
        }
        function k(e) {
          e.preventDefault()
        }
        ;(this.focus = function (t) {
          var r
          i.setFromObject(t),
            !1 === i.isEmpty()
              ? (i.getCenter(p), (r = i.getBoundingSphere(v).radius))
              : (p.setFromMatrixPosition(t.matrixWorld), (r = 0.1)),
            a.set(0, 0, 1),
            a.applyQuaternion(e.quaternion),
            a.multiplyScalar(4 * r),
            e.position.copy(p).add(a),
            n.dispatchEvent(g)
        }),
          (this.pan = function (t) {
            var r = e.position.distanceTo(p)
            t.multiplyScalar(r * n.panSpeed),
              t.applyMatrix3(d.getNormalMatrix(e.matrix)),
              e.position.add(t),
              p.add(t),
              n.dispatchEvent(g)
          }),
          (this.zoom = function (t) {
            var r = e.position.distanceTo(p)
            t.multiplyScalar(r * n.zoomSpeed),
              t.length() > r ||
                (t.applyMatrix3(d.getNormalMatrix(e.matrix)),
                e.position.add(t),
                n.dispatchEvent(g))
          }),
          (this.rotate = function (t) {
            r.copy(e.position).sub(p),
              m.setFromVector3(r),
              (m.theta += t.x * n.rotationSpeed),
              (m.phi += t.y * n.rotationSpeed),
              m.makeSafe(),
              r.setFromSpherical(m),
              e.position.copy(p).add(r),
              e.lookAt(p),
              n.dispatchEvent(g)
          }),
          (this.dispose = function () {
            t.removeEventListener('contextmenu', k, !1),
              t.removeEventListener('dblclick', x, !1),
              t.removeEventListener('wheel', O, !1),
              t.removeEventListener('pointerdown', y, !1),
              t.removeEventListener('touchstart', T, !1),
              t.removeEventListener('touchmove', A, !1)
          }),
          t.addEventListener('contextmenu', k, !1),
          t.addEventListener('dblclick', x, !1),
          t.addEventListener('wheel', O, !1),
          t.addEventListener('pointerdown', y, !1)
        var S = [new b.Vector3(), new b.Vector3(), new b.Vector3()],
          E = [new b.Vector3(), new b.Vector3(), new b.Vector3()],
          C = null
        function T(e) {
          if (!1 !== n.enabled) {
            switch (e.touches.length) {
              case 1:
                S[0]
                  .set(e.touches[0].pageX, e.touches[0].pageY, 0)
                  .divideScalar(window.devicePixelRatio),
                  S[1]
                    .set(e.touches[0].pageX, e.touches[0].pageY, 0)
                    .divideScalar(window.devicePixelRatio)
                break
              case 2:
                S[0]
                  .set(e.touches[0].pageX, e.touches[0].pageY, 0)
                  .divideScalar(window.devicePixelRatio),
                  S[1]
                    .set(e.touches[1].pageX, e.touches[1].pageY, 0)
                    .divideScalar(window.devicePixelRatio),
                  (C = S[0].distanceTo(S[1]))
            }
            E[0].copy(S[0]), E[1].copy(S[1])
          }
        }
        function A(e) {
          if (!1 !== n.enabled) {
            switch (
              (e.preventDefault(), e.stopPropagation(), e.touches.length)
            ) {
              case 1:
                S[0]
                  .set(e.touches[0].pageX, e.touches[0].pageY, 0)
                  .divideScalar(window.devicePixelRatio),
                  S[1]
                    .set(e.touches[0].pageX, e.touches[0].pageY, 0)
                    .divideScalar(window.devicePixelRatio),
                  n.rotate(S[0].sub(s(S[0], E)).multiplyScalar(-1))
                break
              case 2:
                S[0]
                  .set(e.touches[0].pageX, e.touches[0].pageY, 0)
                  .divideScalar(window.devicePixelRatio),
                  S[1]
                    .set(e.touches[1].pageX, e.touches[1].pageY, 0)
                    .divideScalar(window.devicePixelRatio)
                var t = S[0].distanceTo(S[1])
                n.zoom(a.set(0, 0, C - t)), (C = t)
                var r = S[0].clone().sub(s(S[0], E)),
                  i = S[1].clone().sub(s(S[1], E))
                ;(r.x = -r.x), (i.x = -i.x), n.pan(r.add(i))
            }
            E[0].copy(S[0]), E[1].copy(S[1])
          }
          function s(e, t) {
            var n = t[0]
            for (var r in t) n.distanceTo(e) > t[r].distanceTo(e) && (n = t[r])
            return n
          }
        }
        t.addEventListener('touchstart', T, !1),
          t.addEventListener('touchmove', A, !1)
      }
      ;(L.prototype = Object.create(b.EventDispatcher.prototype)),
        (L.prototype.constructor = L)
      var I = n(18),
        U = n(1),
        V = n(2),
        _ = n(19),
        B = n(6),
        F = n(5),
        N = n(3),
        z = n(4),
        H = (function () {
          function e(t) {
            var n = t.mixer,
              r = t.content
            Object(U.a)(this, e)
            var a = r.properties
            ;(this.mixer = n),
              (this.content = r),
              (this.uuid = b.MathUtils.generateUUID()),
              (this.name = r.name),
              (this.position = new b.Vector3()),
              (this.rotation = new b.Vector3()),
              (this.scale = new b.Vector3()),
              (this.visible = !0),
              this.position.fromArray(a.position),
              this.rotation.fromArray(a.rotation),
              this.scale.fromArray(a.scale)
          }
          return (
            Object(V.a)(e, [
              { key: 'init', value: function () {} },
              { key: 'dummyTrigger', value: function () {} },
              { key: 'dispose', value: function () {} },
              { key: 'activate', value: function () {} },
              { key: 'deactivate', value: function () {} },
              { key: 'onClick', value: function () {} },
              {
                key: 'createScriptObject',
                value: function () {
                  var e = this,
                    t = {
                      uuid: e.uuid,
                      name: e.name,
                      mesh: e.mesh,
                      position: e.position,
                      scale: e.scale,
                      rotation: e.rotation,
                      visible: e.visible,
                      setPosition: function (e, n, r) {
                        ;(t.position.x = e),
                          (t.position.y = n),
                          (t.position.z = r),
                          (t.mesh.position.x = e),
                          (t.mesh.position.y = n),
                          (t.mesh.position.z = r)
                      },
                      setRotation: function (e, n, r) {
                        ;(t.rotation.x = e),
                          (t.rotation.y = n),
                          (t.rotation.z = r),
                          (t.mesh.rotation.x = e * b.MathUtils.DEG2RAD),
                          (t.mesh.rotation.y = n * b.MathUtils.DEG2RAD),
                          (t.mesh.rotation.z = r * b.MathUtils.DEG2RAD)
                      },
                      setScale: function (e, n, r) {
                        ;(t.scale.x = e),
                          (t.scale.y = n),
                          (t.scale.z = r),
                          (t.mesh.scale.x = e),
                          (t.mesh.scale.y = n),
                          (t.mesh.scale.z = r)
                      },
                      setVisible: function (e) {
                        ;(t.visible = e), (t.mesh.visible = e)
                      },
                    }
                  return t
                },
              },
            ]),
            e
          )
        })(),
        W = P.loadGLBModel,
        G = P.loadBlobFromURL,
        Y = (function (e) {
          Object(N.a)(n, e)
          var t = Object(z.a)(n)
          function n(e) {
            var r = e.mixer,
              a = e.content
            return Object(U.a)(this, n), t.call(this, { mixer: r, content: a })
          }
          return (
            Object(V.a)(n, [
              {
                key: 'init',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e() {
                      var t, n, r, a, i
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.content),
                                  (n = this.mixer),
                                  !t.mesh)
                                ) {
                                  e.next = 6
                                  break
                                }
                                ;(this.mesh = be.clone(t.mesh)),
                                  (this.mesh.animations = t.mesh.animations),
                                  (e.next = 18)
                                break
                              case 6:
                                if (((e.t0 = t.assetBlob), e.t0)) {
                                  e.next = 11
                                  break
                                }
                                return (e.next = 10), G(t.asset.publicPath)
                              case 10:
                                e.t0 = e.sent
                              case 11:
                                return (
                                  (r = e.t0),
                                  (e.next = 14),
                                  W(r, R.DEFAULT_WIDTH)
                                )
                              case 14:
                                ;(this.mesh = e.sent),
                                  this.mesh.scale.fromArray(t.properties.scale),
                                  this.mesh.rotation.fromArray(
                                    t.properties.rotation
                                  ),
                                  this.mesh.position.fromArray(
                                    t.properties.position
                                  )
                              case 18:
                                for (
                                  a = this.mesh,
                                    this.mesh.userData.isContent = !0,
                                    this.actions = [],
                                    i = 0;
                                  i < a.animations.length;
                                  i++
                                )
                                  this.actions[i] = n.clipAction(
                                    this.mesh.animations[i],
                                    a
                                  )
                              case 22:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'activate',
                value: function () {
                  for (var e = 0; e < this.actions.length; e++)
                    'once' === this.content.properties.animateLoop
                      ? this.actions[e].setLoop(b.LoopOnce)
                      : 'repeat' === this.content.properties.animateLoop
                      ? this.actions[e].setLoop(b.LoopRepeat)
                      : 'pingpong' === this.content.properties.animateLoop &&
                        this.actions[e].setLoop(b.LoopPingPong)
                  this.actions.length > 0 &&
                    this.content.properties.animateAutostart &&
                    this.actions[0].play()
                },
              },
              {
                key: 'deactivate',
                value: function () {
                  for (var e = 0; e < this.actions.length; e++)
                    this.actions[e].stop()
                },
              },
              {
                key: 'createScriptObject',
                value: function () {
                  var e = this,
                    t = Object(B.a)(
                      Object(F.a)(n.prototype),
                      'createScriptObject',
                      this
                    ).call(this)
                  return (
                    Object.assign(t, {
                      getAction: function () {
                        var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0
                        return e.actions[t]
                      },
                      updateTexture: function (e, t) {
                        t &&
                          this.mesh.traverse(function (n) {
                            n.isMesh &&
                              n.material &&
                              n.material.name === e &&
                              new b.TextureLoader().load(t, function (e) {
                                n.material.map.dispose(),
                                  (n.material.map = e),
                                  (n.material.needsUpdate = !0)
                              })
                          })
                      },
                    }),
                    t
                  )
                },
              },
            ]),
            n
          )
        })(H),
        X = P.loadBlobFromURL,
        J = (function (e) {
          Object(N.a)(n, e)
          var t = Object(z.a)(n)
          function n(e) {
            var r = e.mixer,
              a = e.content
            return Object(U.a)(this, n), t.call(this, { mixer: r, content: a })
          }
          return (
            Object(V.a)(n, [
              {
                key: 'init',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e() {
                      var t, n, r
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.content),
                                  this.mixer,
                                  (e.t0 = t.assetBlob),
                                  e.t0)
                                ) {
                                  e.next = 6
                                  break
                                }
                                return (e.next = 5), X(t.asset.publicPath)
                              case 5:
                                e.t0 = e.sent
                              case 6:
                                ;(n = e.t0),
                                  ((r = new Audio(
                                    window.URL.createObjectURL(n)
                                  )).loop = !!t.properties.audioLoop),
                                  r.load(),
                                  (this.sound = r)
                              case 11:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'dispose',
                value: function () {
                  this.sound.pause(), (this.sound.src = '')
                },
              },
              {
                key: 'dummyTrigger',
                value: function () {
                  var e = this
                  return new Promise(function (t, n) {
                    e.sound.play(), e.sound.pause(), t()
                  })
                },
              },
              {
                key: 'activate',
                value: function () {
                  this.content.properties.audioAutostart && this.sound.play()
                },
              },
              {
                key: 'deactivate',
                value: function () {
                  this.sound.pause()
                },
              },
              {
                key: 'createScriptObject',
                value: function () {
                  var e = this,
                    t = Object(B.a)(
                      Object(F.a)(n.prototype),
                      'createScriptObject',
                      this
                    ).call(this)
                  return (
                    Object.assign(t, {
                      getAudio: function () {
                        return e.sound
                      },
                    }),
                    t
                  )
                },
              },
            ]),
            n
          )
        })(H),
        q = P.loadVideo,
        Q = P.loadBlobFromURL,
        K = (function (e) {
          Object(N.a)(n, e)
          var t = Object(z.a)(n)
          function n(e) {
            var r = e.mixer,
              a = e.content
            return Object(U.a)(this, n), t.call(this, { mixer: r, content: a })
          }
          return (
            Object(V.a)(n, [
              {
                key: 'init',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e() {
                      var t, n, r, a, i, s, o
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.content),
                                  (e.t0 = t.assetBlob),
                                  e.t0)
                                ) {
                                  e.next = 6
                                  break
                                }
                                return (e.next = 5), Q(t.asset.publicPath)
                              case 5:
                                e.t0 = e.sent
                              case 6:
                                return (n = e.t0), (e.next = 9), q(n)
                              case 9:
                                ;((r = e.sent).loop = !!t.properties.videoLoop),
                                  (r.muted = !!t.properties.videoMuted),
                                  ((a = new b.VideoTexture(r)).minFilter =
                                    b.LinearFilter),
                                  (a.magFilter = b.LinearFilter),
                                  t.properties.videoChroma
                                    ? (((i = j(a, 54322)).metalness = 1),
                                      (i.flatShading = !0),
                                      (i.side = b.DoubleSide))
                                    : (((i =
                                        new b.MeshBasicMaterial()).metalness = 1),
                                      (i.map = a),
                                      (i.flatShading = !0),
                                      (i.side = b.DoubleSide)),
                                  (s = r.width / r.height),
                                  1,
                                  1 / s,
                                  (o = new b.PlaneGeometry(1, 1)),
                                  (this.mesh = new b.Mesh(o, i)),
                                  this.mesh.scale.fromArray(t.properties.scale),
                                  this.mesh.rotation.fromArray(
                                    t.properties.rotation
                                  ),
                                  this.mesh.position.fromArray(
                                    t.properties.position
                                  ),
                                  (this.mesh.userData.isContent = !0),
                                  (this.video = r)
                              case 26:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'onClick',
                value: function (e) {
                  this.content.properties.videoClickToggle &&
                    (this.video.paused ? this.video.play() : this.video.pause())
                },
              },
              {
                key: 'dispose',
                value: function () {
                  this.video.pause(), (this.video.src = '')
                },
              },
              {
                key: 'dummyTrigger',
                value: function () {
                  var e = this
                  return new Promise(function (t, n) {
                    e.video.play(), e.video.pause(), t()
                  })
                },
              },
              {
                key: 'activate',
                value: function () {
                  this.content.properties.videoAutostart && this.video.play()
                },
              },
              {
                key: 'deactivate',
                value: function () {
                  this.video.pause()
                },
              },
              {
                key: 'createScriptObject',
                value: function () {
                  var e = this,
                    t = Object(B.a)(
                      Object(F.a)(n.prototype),
                      'createScriptObject',
                      this
                    ).call(this)
                  return (
                    Object.assign(t, {
                      getVideo: function () {
                        return e.video
                      },
                    }),
                    t
                  )
                },
              },
            ]),
            n
          )
        })(H),
        Z = P.loadImageAsSpriteMesh,
        $ = P.loadImageAsMesh,
        ee = P.loadBlobFromURL,
        te = (function (e) {
          Object(N.a)(n, e)
          var t = Object(z.a)(n)
          function n(e) {
            var r = e.mixer,
              a = e.content
            return Object(U.a)(this, n), t.call(this, { mixer: r, content: a })
          }
          return (
            Object(V.a)(n, [
              {
                key: 'init',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e() {
                      var t, n, r
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!(t = this.content).mesh) {
                                  e.next = 5
                                  break
                                }
                                ;(this.mesh = t.mesh.clone()), (e.next = 25)
                                break
                              case 5:
                                if (((e.t0 = t.assetBlob), e.t0)) {
                                  e.next = 10
                                  break
                                }
                                return (e.next = 9), ee(t.asset.publicPath)
                              case 9:
                                e.t0 = e.sent
                              case 10:
                                if (((n = e.t0), !t.properties.userFacing)) {
                                  e.next = 17
                                  break
                                }
                                return (e.next = 14), Z(n)
                              case 14:
                                ;(r = e.sent), (e.next = 20)
                                break
                              case 17:
                                return (e.next = 19), $(n)
                              case 19:
                                r = e.sent
                              case 20:
                                ;(this.mesh = new b.Group()),
                                  this.mesh.add(r),
                                  this.mesh.scale.fromArray(t.properties.scale),
                                  this.mesh.rotation.fromArray(
                                    t.properties.rotation
                                  ),
                                  this.mesh.position.fromArray(
                                    t.properties.position
                                  )
                              case 25:
                                this.mesh, (this.mesh.userData.isContent = !0)
                              case 27:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'createScriptObject',
                value: function () {
                  return Object(B.a)(
                    Object(F.a)(n.prototype),
                    'createScriptObject',
                    this
                  ).call(this)
                },
              },
            ]),
            n
          )
        })(H),
        ne = n(39),
        re = n.n(ne),
        ae = (function (e) {
          Object(N.a)(n, e)
          var t = Object(z.a)(n)
          function n(e) {
            var r = e.mixer,
              a = e.content
            return Object(U.a)(this, n), t.call(this, { mixer: r, content: a })
          }
          return (
            Object(V.a)(n, [
              {
                key: 'init',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e() {
                      var t, n, r, a, i
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(t = this.content),
                                  this.mixer,
                                  (n = new re.a(t.text)),
                                  t.properties.userFacing
                                    ? (((r = new b.SpriteMaterial()).map = n),
                                      (this.mesh = new b.Sprite(r)))
                                    : ((a = new b.MeshStandardMaterial()),
                                      (i = new b.PlaneGeometry(1, 1)),
                                      (a.map = n),
                                      (a.side = b.DoubleSide),
                                      (this.mesh = new b.Mesh(i, a))),
                                  n.redraw(),
                                  this.mesh.position.fromArray(
                                    t.properties.position
                                  ),
                                  this.mesh.rotation.fromArray(
                                    t.properties.rotation
                                  ),
                                  this.mesh.scale.fromArray(t.properties.scale),
                                  this.mesh,
                                  (this.mesh.userData.isContent = !0)
                              case 9:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'createScriptObject',
                value: function () {
                  return Object(B.a)(
                    Object(F.a)(n.prototype),
                    'createScriptObject',
                    this
                  ).call(this)
                },
              },
            ]),
            n
          )
        })(H),
        ie = n(40),
        se = n(67),
        oe = n.n(se),
        ce = n(68),
        ue = (function (e) {
          Object(N.a)(n, e)
          var t = Object(z.a)(n)
          function n(e) {
            var r = e.mixer,
              a = e.content
            return Object(U.a)(this, n), t.call(this, { mixer: r, content: a })
          }
          return (
            Object(V.a)(n, [
              {
                key: 'init',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e() {
                      var t, n, r, a
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(t = this.content),
                                  (this.mesh = this._createMesh()),
                                  (this.mesh.userData.isContent = !0),
                                  this.mesh.scale.fromArray(t.properties.scale),
                                  this.mesh.position.fromArray(
                                    t.properties.position
                                  ),
                                  this.mesh.rotation.fromArray(
                                    t.properties.rotation
                                  ),
                                  (n = this._createDivs(t)),
                                  (r = n.div),
                                  (a = n.playerDiv),
                                  t.properties.userFacing
                                    ? (this.cssElement = new _.c(r))
                                    : (this.cssElement = new _.a(r)),
                                  this.cssElement.position.copy(
                                    this.mesh.position
                                  ),
                                  this.cssElement.rotation.copy(
                                    this.mesh.rotation
                                  ),
                                  (this.cssElement.element.style.visibility =
                                    'hidden'),
                                  (this.player = this._createPlayer(t, a)),
                                  (this.playerState = null)
                              case 13:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'onClick',
                value: function (e) {
                  this.content.properties.videoClickToggle &&
                    (e.isPlayingVideo() ? e.pauseVideo() : e.playVideo())
                },
              },
              {
                key: 'dummyTrigger',
                value: function () {
                  var e = this
                  return new Promise(function (t, n) {
                    var r = e.content
                    'youtube' === r.embed.videoMeta.service
                      ? e.player.playVideo().then(function () {
                          e.player.stopVideo(), t()
                        })
                      : 'vimeo' === r.embed.videoMeta.service &&
                        e.player.play().then(function () {
                          e.player.pause(), t()
                        })
                  })
                },
              },
              {
                key: 'activate',
                value: function () {
                  var e = this.content.embed.videoMeta
                  ;(this.cssElement.element.style.visibility = 'visible'),
                    this.content.properties.videoAutostart &&
                      ('youtube' === e.service
                        ? this.player.playVideo()
                        : 'vimeo' === e.service &&
                          this.player
                            .play()
                            .then(function () {})
                            .catch(function (e) {
                              console.log('vimeo activate play error', e)
                            }))
                },
              },
              {
                key: 'deactivate',
                value: function () {
                  var e = this.content.embed.videoMeta
                  ;(this.cssElement.element.style.visibility = 'hidden'),
                    'youtube' === e.service
                      ? this.player.pauseVideo()
                      : 'vimeo' === e.service && this.player.pause()
                },
              },
              {
                key: 'createScriptObject',
                value: function () {
                  var e = this,
                    t = this,
                    r = this.content.embed.videoMeta,
                    a = Object(B.a)(
                      Object(F.a)(n.prototype),
                      'createScriptObject',
                      this
                    ).call(this),
                    i = this.player
                  Object.assign(a, { cssElement: t.cssElement })
                  var s = a.setPosition,
                    o = a.setRotation,
                    c = a.setVisible
                  return (
                    Object.assign(a, {
                      setPosition: function (t, n, r) {
                        s(t, n, r), e.cssElement.position.copy(e.mesh.position)
                      },
                      setRotation: function (t, n, r) {
                        o(t, n, r), e.cssElement.rotation.copy(e.mesh.rotation)
                      },
                      setVisible: function (t) {
                        c(t),
                          (e.cssElement.element.style.visibility = t
                            ? 'visible'
                            : 'hidden')
                      },
                    }),
                    'youtube' === r.service
                      ? Object.assign(a, {
                          playVideo: function () {
                            i.playVideo()
                          },
                          pauseVideo: function () {
                            i.pauseVideo()
                          },
                          isPlayingVideo: function () {
                            return (
                              t.playerState === window.YT.PlayerState.PLAYING
                            )
                          },
                        })
                      : 'vimeo' === r.service &&
                        Object.assign(a, {
                          playVideo: function () {
                            i.play()
                          },
                          pauseVideo: function () {
                            i.pause()
                          },
                          isPlayingVideo: function () {
                            return 'playing' === e.playerState
                          },
                        }),
                    a
                  )
                },
              },
              {
                key: '_createMesh',
                value: function () {
                  var e = new b.MeshBasicMaterial({
                      color: 0,
                      opacity: 0,
                      side: b.DoubleSide,
                    }),
                    t = new b.PlaneGeometry(
                      1,
                      R.DEFAULT_EMBED_HEIGHT / R.DEFAULT_EMBED_WIDTH
                    )
                  return new b.Mesh(t, e)
                },
              },
              {
                key: '_createDivs',
                value: function (e) {
                  var t = e.properties,
                    n = document.createElement('div')
                  ;(n.style.userSelect = 'none'),
                    (n.style.width = t.scale[0] + 'px'),
                    (n.style.height =
                      (R.DEFAULT_EMBED_HEIGHT / R.DEFAULT_EMBED_WIDTH) *
                        t.scale[0] +
                      'px'),
                    (n.style.position = 'relative')
                  var r = document.createElement('div')
                  return (
                    (r.style.userSelect = 'none'),
                    (r.style.width = '100%'),
                    (r.style.height = '100%'),
                    (r.style.border = '0px'),
                    n.appendChild(r),
                    { div: n, playerDiv: r }
                  )
                },
              },
              {
                key: '_createPlayer',
                value: function (e, t) {
                  var n,
                    r = this,
                    a = e.embed.videoMeta,
                    i = R.DEFAULT_EMBED_WIDTH,
                    s = R.DEFAULT_EMBED_HEIGHT
                  if ('youtube' === a.service) {
                    var o = e.properties.videoLoop ? 1 : 0
                    ;(n = oe()(t, {
                      videoId: a.id,
                      width: i,
                      height: s,
                      playerVars: {
                        loop: o,
                        playlist: a.id,
                        controls: 0,
                        fs: 0,
                        playsinline: 1,
                        rel: 0,
                      },
                    })).on('ready', function (t) {
                      e.properties.videoMuted && n.mute()
                    }),
                      n.on('stateChange', function (e) {
                        r.playerState = e.data
                      })
                  } else if ('vimeo' === a.service) {
                    var c = !!e.properties.videoLoop
                    ;(n = new ce.a(t, {
                      id: a.id,
                      width: i,
                      height: s,
                      controls: !1,
                      loop: c,
                    })).on('loaded', function () {
                      var r = t.getElementsByTagName('iframe')[0]
                      r &&
                        ((r.style.width = '100%'), (r.style.height = '100%')),
                        e.properties.videoMuted && n.setVolume(0)
                    }),
                      n.on('playing', function (e) {
                        r.playerState = 'playing'
                      }),
                      n.on('pause', function (e) {
                        r.playerState = 'pause'
                      }),
                      n.on('ended', function (e) {
                        r.playerState = 'ended'
                      })
                  }
                  return n
                },
              },
            ]),
            n
          )
        })(H),
        le = (function () {
          function e(t) {
            var n = t.objects,
              r = t.systemControl
            Object(U.a)(this, e), (this.objects = n), (this.systemControl = r)
          }
          return (
            Object(V.a)(e, [
              {
                key: 'createScriptObject',
                value: function () {
                  var e = this,
                    t = {}
                  return (
                    Object.assign(t, {
                      getObject: function (t) {
                        return e.objects.find(function (e) {
                          return e.name === t
                        })
                      },
                      captureScreen: function () {
                        e.systemControl
                          ? e.systemControl.captureScreen()
                          : console.log('system not found')
                      },
                    }),
                    t
                  )
                },
              },
            ]),
            e
          )
        })(),
        pe = (function () {
          function e(t) {
            Object(U.a)(this, e),
              (this.container = t),
              (this.objects = null),
              (this.sceneObjects = null),
              (this.onCustomScriptError = null),
              (this.defaultCamera = this._createCamera()),
              (this.camera = this.defaultCamera),
              (this.scene = new b.Scene()),
              (this.cssScene = new b.Scene()),
              (this.mixer = new b.AnimationMixer(this.scene)),
              (this.renderer = this._createRenderer()),
              (this.cssRenderer = this._createCSSRenderer()),
              (this.targets = []),
              (this.selectedTarget = null),
              (this.clock = null),
              (this.rendererResolve = null)
          }
          return (
            Object(V.a)(e, [
              {
                key: 'init',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e(t) {
                      var n,
                        r,
                        a,
                        i,
                        s,
                        o,
                        c,
                        u,
                        l,
                        p,
                        d,
                        h,
                        m,
                        v,
                        g,
                        y,
                        j,
                        w,
                        x,
                        O,
                        k,
                        S,
                        E = arguments
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(n = E.length > 1 && void 0 !== E[1] && E[1]),
                                  (r = E.length > 2 ? E[2] : void 0),
                                  (this.performanceDiv =
                                    this._createPerformanceDiv()),
                                  (this.editorControls = new L(
                                    this.camera,
                                    this.container
                                  )),
                                  (this.editorControls.enabled = !0),
                                  (a = new b.PMREMGenerator(
                                    this.renderer
                                  )).compileEquirectangularShader(),
                                  (this.scene.environment = a.fromScene(
                                    new ie.a(),
                                    0.04
                                  ).texture),
                                  this.container.appendChild(
                                    this.renderer.domElement
                                  ),
                                  this.container.appendChild(
                                    this.cssRenderer.domElement
                                  ),
                                  this.container.appendChild(
                                    this.performanceDiv
                                  ),
                                  this._setupMouseEvents(),
                                  (i = []),
                                  (s = 0)
                              case 14:
                                if (!(s < t.length)) {
                                  e.next = 63
                                  break
                                }
                                ;(o = {
                                  targetIndex: s,
                                  customFunctions: {},
                                  customData: {},
                                  subScene: null,
                                  cssSubscene: null,
                                  sceneObject: null,
                                  objects: null,
                                  objectBuilders: null,
                                }),
                                  (c = t[s]),
                                  (u = new b.Group()),
                                  (l = new b.Group()),
                                  (u.matrixAutoUpdate = !1),
                                  (l.matrixAutoUpdate = !1),
                                  n &&
                                    c.imageTarget &&
                                    c.imageTarget.mesh &&
                                    ((p = c.imageTarget.mesh.clone()),
                                    u.add(p)),
                                  (d = []),
                                  (h = []),
                                  (m = Object(I.a)(c.contents)),
                                  (e.prev = 25),
                                  m.s()
                              case 27:
                                if ((v = m.n()).done) {
                                  e.next = 40
                                  break
                                }
                                return (
                                  (g = v.value),
                                  (y = void 0),
                                  'asset' === g.type
                                    ? 'image' === g.asset.type
                                      ? (y = new te({
                                          content: g,
                                          mixer: this.mixer,
                                          objects: d,
                                        }))
                                      : 'glb' === g.asset.type
                                      ? (y = new Y({
                                          content: g,
                                          mixer: this.mixer,
                                          objects: d,
                                        }))
                                      : 'audio' === g.asset.type
                                      ? (y = new J({
                                          content: g,
                                          mixer: this.mixer,
                                          objects: d,
                                        }))
                                      : 'video' === g.asset.type &&
                                        (y = new K({
                                          content: g,
                                          mixer: this.mixer,
                                          objects: d,
                                        }))
                                    : 'embed' === g.type
                                    ? (y = new ue({ content: g, objects: d }))
                                    : 'text' === g.type &&
                                      (y = new ae({ content: g, objects: d })),
                                  (e.next = 33),
                                  y.init()
                                )
                              case 33:
                                ;(j = y.createScriptObject()),
                                  d.push(j),
                                  h.push(y),
                                  y.mesh && u.add(y.mesh),
                                  j.cssElement && l.add(j.cssElement)
                              case 38:
                                e.next = 27
                                break
                              case 40:
                                e.next = 45
                                break
                              case 42:
                                ;(e.prev = 42), (e.t0 = e.catch(25)), m.e(e.t0)
                              case 45:
                                return (e.prev = 45), m.f(), e.finish(45)
                              case 48:
                                this._initScript(o, c.script) ||
                                  i.push('target ' + (s + 1)),
                                  (w = new le({
                                    objects: d,
                                    systemControl: r,
                                  })),
                                  (x = w.createScriptObject()),
                                  (o.subScene = u),
                                  (o.cssSubscene = l),
                                  (o.objects = d),
                                  (o.objectBuilders = h),
                                  (o.sceneObject = x),
                                  (o.sceneObjectBuilder = w),
                                  this.targets.push(o),
                                  this._dispatchTargetEvent(o, 'onInit')
                              case 60:
                                s++, (e.next = 14)
                                break
                              case 63:
                                O = Object(I.a)(this.targets)
                                try {
                                  for (O.s(); !(k = O.n()).done; )
                                    (S = k.value),
                                      this.cssScene.add(S.cssSubscene)
                                } catch (f) {
                                  O.e(f)
                                } finally {
                                  O.f()
                                }
                                return (
                                  this.cssRenderer.render(
                                    this.cssScene,
                                    this.camera
                                  ),
                                  e.abrupt('return', i)
                                )
                              case 67:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[25, 42, 45, 48]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'dispose',
                value: function () {
                  this.stopTarget()
                  var e,
                    t = Object(I.a)(this.targets)
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var n,
                        r = e.value,
                        a = Object(I.a)(r.objectBuilders)
                      try {
                        for (a.s(); !(n = a.n()).done; ) {
                          n.value.dispose()
                        }
                      } catch (i) {
                        a.e(i)
                      } finally {
                        a.f()
                      }
                      D.disposeObject(r.subScene)
                    }
                  } catch (i) {
                    t.e(i)
                  } finally {
                    t.f()
                  }
                  D.disposeObject(this.scene),
                    this.mixer.uncacheRoot(this.scene),
                    this.renderer.dispose()
                },
              },
              {
                key: 'switchToAR',
                value: function (e) {
                  ;(this.camera = e), (this.editorControls.enabled = !1)
                },
              },
              {
                key: 'switchToAnchor',
                value: function () {
                  ;(this.editorControls.enabled = !0),
                    (this.camera = this.defaultCamera),
                    this.camera.position.set(0, 1e3, 2e3),
                    this.camera.lookAt(new b.Vector3())
                  var e,
                    t = Object(I.a)(this.targets)
                  try {
                    for (t.s(); !(e = t.n()).done; ) {
                      var n = e.value
                      n.subScene.matrix.set(
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1
                      ),
                        n.cssSubscene.matrix.set(
                          1,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          1,
                          0,
                          0,
                          0,
                          0,
                          1
                        )
                    }
                  } catch (r) {
                    t.e(r)
                  } finally {
                    t.f()
                  }
                },
              },
              {
                key: 'dummyTrigger',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e() {
                      var t, n, r, a, i, s
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                ;(t = Object(I.a)(this.targets)),
                                  (e.prev = 1),
                                  t.s()
                              case 3:
                                if ((n = t.n()).done) {
                                  e.next = 24
                                  break
                                }
                                ;(r = n.value),
                                  (a = Object(I.a)(r.objectBuilders)),
                                  (e.prev = 6),
                                  a.s()
                              case 8:
                                if ((i = a.n()).done) {
                                  e.next = 14
                                  break
                                }
                                return (
                                  (s = i.value), (e.next = 12), s.dummyTrigger()
                                )
                              case 12:
                                e.next = 8
                                break
                              case 14:
                                e.next = 19
                                break
                              case 16:
                                ;(e.prev = 16), (e.t0 = e.catch(6)), a.e(e.t0)
                              case 19:
                                return (e.prev = 19), a.f(), e.finish(19)
                              case 22:
                                e.next = 3
                                break
                              case 24:
                                e.next = 29
                                break
                              case 26:
                                ;(e.prev = 26), (e.t1 = e.catch(1)), t.e(e.t1)
                              case 29:
                                return (e.prev = 29), t.f(), e.finish(29)
                              case 32:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [
                          [1, 26, 29, 32],
                          [6, 16, 19, 22],
                        ]
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: '_initScript',
                value: function (e, t) {
                  var n = [
                      'onInit',
                      'onActivate',
                      'onDeactivate',
                      'onUpdate',
                      'onClick',
                    ],
                    r = {}
                  n.forEach(function (e) {
                    r[e] = e
                  })
                  var a = n.join(','),
                    i = JSON.stringify(r).replace(/\"/g, '')
                  try {
                    var s = new Function(a, t + '\nreturn ' + i + ';')()
                    e.customFunctions = s
                  } catch (o) {
                    return console.log('error compiling custom script', o), !1
                  }
                  return !0
                },
              },
              {
                key: '_setupMouseEvents',
                value: function () {
                  var e = this,
                    t = this.scene,
                    n = this.renderer.domElement
                  n.addEventListener('click', function (r) {
                    var a = e.camera,
                      i = r.clientX,
                      s = r.clientY,
                      o = n.getBoundingClientRect(),
                      c = [(i - o.left) / o.width, (s - o.top) / o.height],
                      u = new b.Vector2(2 * c[0] - 1, -2 * c[1] + 1),
                      l = new b.Raycaster()
                    l.setFromCamera(u, a)
                    var p = t.children[0].children.filter(function (e) {
                        return e.userData.isContent && e.visible
                      }),
                      d = l.intersectObjects(p, !0)
                    if (0 === d.length) return null
                    for (
                      var h = d[0].object;
                      h.parent && !h.userData.isContent;

                    )
                      h = h.parent
                    if (h.userData.isContent) {
                      var f,
                        m = Object(I.a)(e.selectedTarget.objects)
                      try {
                        var v = function () {
                          var t = f.value
                          t.mesh === h &&
                            (e.selectedTarget.objectBuilders.forEach(function (
                              e
                            ) {
                              e.uuid === t.uuid && e.onClick(t)
                            }),
                            e._dispatchTargetEvent(
                              e.selectedTarget,
                              'onClick',
                              { object: t, time: e.clock.elapsedTime }
                            ))
                        }
                        for (m.s(); !(f = m.n()).done; ) v()
                      } catch (g) {
                        m.e(g)
                      } finally {
                        m.f()
                      }
                    }
                  })
                },
              },
              {
                key: 'startTarget',
                value: function (e, t) {
                  var n = this
                  this.stopTarget()
                  var r = this.mixer,
                    a = this.scene,
                    i = this.cssScene,
                    s = this.cssRenderer,
                    o = (this.container, this.renderer),
                    c = (this.camera, this.sceneObject, this.targets[e])
                  ;(this.selectedTarget = c),
                    a.add(c.subScene),
                    i.add(c.cssSubscene),
                    this.selectedTarget.objectBuilders.forEach(function (e) {
                      e.activate()
                    }),
                    (this.clock = new b.Clock()),
                    this._dispatchTargetEvent(c, 'onActivate', {
                      regionCapturedImage: t,
                    }),
                    o.setAnimationLoop(function () {
                      performance.now()
                      var e = n.clock.elapsedTime,
                        t = n.clock.getDelta()
                      n._dispatchTargetEvent(c, 'onUpdate', {
                        time: e,
                        deltaTime: t,
                      }),
                        r.update(t),
                        o.render(a, n.camera),
                        s.render(i, n.camera),
                        n.rendererResolve &&
                          (n.rendererResolve(o), (n.rendererResolve = null))
                      performance.now()
                    })
                },
              },
              {
                key: 'stopTarget',
                value: function () {
                  null !== this.selectedTarget &&
                    (this.selectedTarget.objectBuilders.forEach(function (e) {
                      e.deactivate()
                    }),
                    this._dispatchTargetEvent(
                      this.selectedTarget,
                      'onDeactivate'
                    ),
                    this.renderer.setAnimationLoop(null),
                    this.renderer.clear(),
                    this.mixer.uncacheRoot(this.selectedTarget.subScene),
                    this.scene.remove(this.selectedTarget.subScene))
                },
              },
              {
                key: 'requestRenderer',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e() {
                      var t = this
                      return f.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                'return',
                                new Promise(function (e, n) {
                                  t.rendererResolve = e
                                })
                              )
                            case 1:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'resizeUI',
                value: function () {
                  var e = this.performanceDiv,
                    t = this.renderer,
                    n = this.cssRenderer,
                    r = this.camera,
                    a = this.container
                  t.setViewport(0, 0, a.offsetWidth, a.offsetHeight),
                    t.setSize(a.offsetWidth, a.offsetHeight, !1),
                    n.setSize(a.offsetWidth, a.offsetHeight, !1)
                  var i = this.renderer.domElement,
                    s = this.cssRenderer.domElement
                  ;(i.style.position = 'absolute'),
                    (i.style.left = 0),
                    (i.style.top = 0),
                    (i.style.width = a.offsetWidth + 'px'),
                    (i.style.height = a.offsetHeight + 'px'),
                    (i.style.zIndex = 2),
                    (s.style.position = 'absolute'),
                    (s.style.left = 0),
                    (s.style.top = 0),
                    (s.style.width = a.offsetWidth + 'px'),
                    (s.style.height = a.offsetHeight + 'px'),
                    (s.style.zIndex = 1),
                    (e.style.position = 'absolute'),
                    (e.style.bottom = '5px'),
                    (e.style.left = '5px'),
                    (r.aspect = a.offsetWidth / a.offsetHeight),
                    r.updateProjectionMatrix()
                },
              },
              {
                key: '_createRenderer',
                value: function () {
                  var e = new b.WebGLRenderer({
                    antialias: !0,
                    alpha: !0,
                    preserveDrawingBuffer: !0,
                  })
                  return (
                    (e.outputEncoding = b.sRGBEncoding),
                    e.setPixelRatio(window.devicePixelRatio),
                    e
                  )
                },
              },
              {
                key: '_createCSSRenderer',
                value: function () {
                  return new _.b({ antialias: !0 })
                },
              },
              {
                key: '_createPerformanceDiv',
                value: function () {
                  return document.createElement('div')
                },
              },
              {
                key: '_createCamera',
                value: function () {
                  var e = new b.PerspectiveCamera(50, 1, 1, 1e5)
                  return (
                    e.position.set(0, 1e3, 2e3), e.lookAt(new b.Vector3()), e
                  )
                },
              },
              {
                key: '_dispatchTargetEvent',
                value: function (e, t, n) {
                  var r = Object.assign(
                    { target: e.sceneObject, data: e.customData },
                    n
                  )
                  if (e.customFunctions[t])
                    try {
                      e.customFunctions[t](r)
                    } catch (a) {
                      this.onCustomScriptError &&
                        this.onCustomScriptError(a.message)
                    }
                },
              },
            ]),
            e
          )
        })(),
        de = n(69),
        he = n(70),
        fe = P,
        me = pe,
        ve = b,
        be = (de.a, _.a, _.c, _.b, ie.a, re.a, he.a),
        ge = 1e3,
        ye = (function () {
          function e(t) {
            var n = t.container,
              r = t.player,
              a = t.onDetected,
              i = t.onUndetected,
              s = t.onCapturedPhoto,
              o = t.regionCaptureEnabled
            Object(U.a)(this, e),
              (this.container = n),
              (this.player = r),
              (this.playerContainer = r.container),
              (this.onDetected = a),
              (this.onUndetected = i),
              (this.onCapturedPhoto = s),
              (this.regionCaptureEnabled = o),
              (this.input = null),
              (this.inputWidth = null),
              (this.inputHeight = null),
              (this.controller = null),
              (this.anchorPostMatrix = null),
              (this.detected = !1),
              (this.isARSupported = !1),
              n.appendChild(this.playerContainer)
          }
          return (
            Object(V.a)(e, [
              {
                key: 'initUI',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e(t) {
                      var n,
                        r,
                        a,
                        i,
                        s,
                        c,
                        u,
                        l,
                        p,
                        d,
                        h,
                        m,
                        v,
                        b,
                        g,
                        y,
                        j,
                        w,
                        x,
                        O,
                        k,
                        S,
                        E
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = !1),
                                  this.input && this._stopVideo(),
                                  this.controller &&
                                    this.controller.stopProcessVideo(),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  this._startVideo()
                                )
                              case 6:
                                for (
                                  r = e.sent,
                                    a = r.input,
                                    i = r.inputWidth,
                                    s = r.inputHeight,
                                    this.input = a,
                                    this.inputWidth = i,
                                    this.inputHeight = s,
                                    c = new window.MINDAR.Controller({
                                      inputWidth: this.inputWidth,
                                      inputHeight: this.inputHeight,
                                      onUpdate:
                                        this.onControllerUpdate.bind(this),
                                    }),
                                    this.regionCaptureEnabled &&
                                      (c.shouldCaptureRegion = !0),
                                    u = c.addImageTargetsFromBuffer(t),
                                    l = u.dimensions,
                                    p = [],
                                    d = 0;
                                  d < l.length;
                                  d++
                                )
                                  (h = Object(o.a)(l[d], 2)),
                                    (m = h[0]),
                                    (v = h[1]),
                                    (b = new ve.Vector3()),
                                    (g = new ve.Quaternion()).setFromEuler(
                                      new ve.Euler(Math.PI / 2, 0, 0)
                                    ),
                                    (y = new ve.Vector3()),
                                    (b.x = m / 2),
                                    (b.y = m / 2 + (v - m) / 2),
                                    (y.x = m / ge),
                                    (y.y = m / ge),
                                    (y.z = m / ge),
                                    (j = new ve.Matrix4()).compose(b, g, y),
                                    p.push(j)
                                return (
                                  (this.anchorPostMatrix = p),
                                  (this.controller = c),
                                  (e.next = 22),
                                  c.dummyRun(this.input)
                                )
                              case 22:
                                ;(this.isARSupported = !0),
                                  (n = !0),
                                  (e.next = 29)
                                break
                              case 26:
                                ;(e.prev = 26),
                                  (e.t0 = e.catch(3)),
                                  console.log('ar failed', e.t0)
                              case 29:
                                return (
                                  n &&
                                    ((w =
                                      this.controller.getProjectionMatrix()),
                                    (x =
                                      (2 * Math.atan(1 / w[5]) * 180) /
                                      Math.PI),
                                    (O = w[14] / (w[10] - 1)),
                                    (k = w[14] / (w[10] + 1)),
                                    (S = this.inputWidth / this.inputHeight),
                                    ((E = new ve.PerspectiveCamera()).fov = x),
                                    (E.aspect = S),
                                    (E.near = O),
                                    (E.far = k),
                                    E.updateProjectionMatrix(),
                                    (this.camera = E)),
                                  this.input &&
                                    this.container.appendChild(this.input),
                                  this.selectTarget(0),
                                  this.resizeUI(),
                                  e.abrupt('return', n)
                                )
                              case 34:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this,
                        [[3, 26]]
                      )
                    })
                  )
                  return function (t) {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'captureScreen',
                value: (function () {
                  var e = Object(m.a)(
                    f.a.mark(function e() {
                      var t, n, r, a, i, s, o, c
                      return f.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (console.log(
                                    'ar container capture screen...'
                                  ),
                                  this.input)
                                ) {
                                  e.next = 4
                                  break
                                }
                                return (
                                  console.log('input not ready'),
                                  e.abrupt('return')
                                )
                              case 4:
                                return (
                                  (e.next = 6), this.player.requestRenderer()
                                )
                              case 6:
                                ;(t = e.sent),
                                  (n = document.createElement('canvas')),
                                  (r = n.getContext('2d')),
                                  (n.width = this.container.offsetWidth),
                                  (n.height = this.container.offsetHeight),
                                  (a =
                                    this.inputWidth *
                                    ((-1 * parseInt(this.input.style.left)) /
                                      parseInt(this.input.style.width))),
                                  (i =
                                    this.inputHeight *
                                    ((-1 * parseInt(this.input.style.top)) /
                                      parseInt(this.input.style.height))),
                                  (s = this.inputWidth - 2 * a),
                                  (o = this.inputHeight - 2 * i),
                                  r.drawImage(
                                    this.input,
                                    a,
                                    i,
                                    s,
                                    o,
                                    0,
                                    0,
                                    n.width,
                                    n.height
                                  ),
                                  r.drawImage(
                                    t.domElement,
                                    0,
                                    0,
                                    n.width,
                                    n.height
                                  ),
                                  (c = n.toDataURL('image/png')),
                                  this.onCapturedPhoto(c)
                              case 19:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })(),
              },
              {
                key: 'startAnchorAndShowTarget',
                value: function (e) {
                  this._detected(e)
                },
              },
              {
                key: 'startAnchor',
                value: function () {
                  this.player.switchToAnchor(),
                    this.isARSupported && this.controller.stopProcessVideo()
                },
              },
              {
                key: 'startAR',
                value: function () {
                  this._undetected(),
                    this.isARSupported &&
                      (this.player.switchToAR(this.camera),
                      this.controller.processVideo(this.input))
                },
              },
              {
                key: 'selectTarget',
                value: function (e) {
                  this.isARSupported &&
                    (this.controller.interestedTargetIndex = e)
                },
              },
              {
                key: 'stop',
                value: function () {
                  this._undetected()
                },
              },
              {
                key: '_undetected',
                value: function () {
                  ;(this.detected = !1),
                    this.player.stopTarget(),
                    this.onUndetected()
                },
              },
              {
                key: '_detected',
                value: function (e) {
                  this.detected = !0
                  var t = null
                  this.regionCaptureEnabled &&
                    (t = (function (e) {
                      for (
                        var t = e.length,
                          n = e[0].length,
                          r = new Uint8ClampedArray(t * n * 4),
                          a = 0;
                        a < t;
                        a++
                      )
                        for (var i = 0; i < n; i++) {
                          var s = a * n + i
                          ;(r[4 * s + 0] = e[a][i][0]),
                            (r[4 * s + 1] = e[a][i][1]),
                            (r[4 * s + 2] = e[a][i][2]),
                            (r[4 * s + 3] = 255)
                        }
                      var o = new ImageData(r, n, t),
                        c = document.createElement('canvas')
                      ;(c.height = t), (c.width = n)
                      var u = c.getContext('2d')
                      return (
                        u.clearRect(0, 0, c.width, c.height),
                        u.putImageData(o, 0, 0),
                        c.toDataURL('image/png')
                      )
                    })(this.controller.capturedRegion))
                  this.player.startTarget(e, t), this.onDetected(e)
                },
              },
              {
                key: 'onControllerUpdate',
                value: function (e) {
                  var t = e.type,
                    n = e.targetIndex,
                    r = e.worldMatrix
                  if ('updateMatrix' === t)
                    if (r) {
                      this.detected || this._detected(n)
                      var a = this.player.selectedTarget.subScene,
                        i = this.player.selectedTarget.cssSubscene,
                        s = this.anchorPostMatrix[n],
                        o = new ve.Matrix4()
                      ;(o.elements = r),
                        o.multiply(s),
                        (a.matrix = o),
                        (i.matrix = o)
                    } else this._undetected()
                },
              },
              {
                key: 'resizeUI',
                value: function () {
                  var e = this.container,
                    t = this.input,
                    n = this.inputWidth,
                    r = this.inputHeight
                  t || ((n = e.clientWidth), (r = e.clientHeight))
                  var a,
                    i,
                    s = e.clientWidth,
                    o = e.clientHeight,
                    c = n / r
                  c > s / o ? ((i = o), (a = o * c)) : ((a = s), (i = s / c))
                  var u = -(a - s) / 2 + 'px',
                    l = -(i - o) / 2 + 'px',
                    p = a + 'px',
                    d = i + 'px'
                  t &&
                    ((t.style.position = 'absolute'),
                    (t.style.left = u),
                    (t.style.top = l),
                    (t.style.width = p),
                    (t.style.height = d),
                    (t.style.zIndex = 1))
                  var h = this.playerContainer
                  ;(h.style.position = 'absolute'),
                    (h.style.left = u),
                    (h.style.top = l),
                    (h.style.width = p),
                    (h.style.height = d),
                    (h.style.zIndex = 2),
                    (h.style.background = 'transparent'),
                    this.player.resizeUI()
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this.isARSupported && this.controller.stopProcessVideo(),
                    this.player.dispose(),
                    this._stopVideo()
                },
              },
              {
                key: '_fakeStartVideo',
                value: function () {
                  return new Promise(
                    (function () {
                      var e = Object(m.a)(
                        f.a.mark(function e(t, n) {
                          var r
                          return f.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  ;((r = document.createElement('img')).onload =
                                    function () {
                                      t({
                                        input: r,
                                        inputWidth: r.width,
                                        inputHeight: r.height,
                                      })
                                    }),
                                    (r.src =
                                      'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png')
                                case 3:
                                case 'end':
                                  return e.stop()
                              }
                          }, e)
                        })
                      )
                      return function (t, n) {
                        return e.apply(this, arguments)
                      }
                    })()
                  )
                },
              },
              {
                key: '_startVideo',
                value: function () {
                  return new Promise(
                    (function () {
                      var e = Object(m.a)(
                        f.a.mark(function e(t, n) {
                          var r
                          return f.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((r =
                                      document.createElement(
                                        'video'
                                      )).setAttribute('autoplay', ''),
                                    r.setAttribute('muted', ''),
                                    r.setAttribute('playsinline', ''),
                                    navigator.mediaDevices &&
                                      navigator.mediaDevices.getUserMedia)
                                  ) {
                                    e.next = 8
                                    break
                                  }
                                  return (
                                    console.log(
                                      'missing navigator.mediaDevices.getUserMedia'
                                    ),
                                    n(),
                                    e.abrupt('return')
                                  )
                                case 8:
                                  navigator.mediaDevices
                                    .getUserMedia({
                                      audio: !1,
                                      video: { facingMode: 'environment' },
                                    })
                                    .then(function (e) {
                                      r.addEventListener(
                                        'loadedmetadata',
                                        function () {
                                          t({
                                            input: r,
                                            inputWidth: r.videoWidth,
                                            inputHeight: r.videoHeight,
                                          })
                                        }
                                      ),
                                        (r.srcObject = e)
                                    })
                                    .catch(function (e) {
                                      console.log('getUserMedia error', e), n()
                                    })
                                case 9:
                                case 'end':
                                  return e.stop()
                              }
                          }, e)
                        })
                      )
                      return function (t, n) {
                        return e.apply(this, arguments)
                      }
                    })()
                  )
                },
              },
              {
                key: '_stopVideo',
                value: function () {
                  var e = this.input
                  e &&
                    e.srcObject &&
                    (e.srcObject.getTracks().forEach(function (e) {
                      e.stop()
                    }),
                    e.remove())
                },
              },
            ]),
            e
          )
        })(),
        je = n(9),
        we = a.a.createContext({}),
        xe = function (e) {
          var t = e.children,
            n = e.project,
            a = Object(r.useRef)(null),
            i = Object(r.useRef)(null),
            s = Object(r.useState)(''),
            c = Object(o.a)(s, 2),
            u = c[0],
            l = c[1],
            p = Object(r.useState)(-1),
            d = Object(o.a)(p, 2),
            h = d[0],
            v = d[1],
            b = Object(r.useState)(!1),
            g = Object(o.a)(b, 2),
            y = g[0],
            j = g[1],
            w = Object(r.useState)(!1),
            x = Object(o.a)(w, 2),
            O = x[0],
            k = x[1],
            S = Object(r.useState)(null),
            E = Object(o.a)(S, 2),
            C = E[0],
            T = E[1],
            A = Object(r.useCallback)(
              (function () {
                var e = Object(m.a)(
                  f.a.mark(function e(t) {
                    var n
                    return f.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            ;(n = a.current),
                              j(t),
                              t ? n.startAR() : n.startAnchor()
                          case 3:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })(),
              [j]
            ),
            M = Object(r.useCallback)(
              Object(m.a)(
                f.a.mark(function e() {
                  var t, r
                  return f.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            l('launching'),
                            (t = a.current),
                            (e.next = 4),
                            t.initUI(n.mindBuffer)
                          )
                        case 4:
                          ;(r = e.sent),
                            k(r),
                            A(r),
                            n &&
                              n.meta &&
                              n.meta.projectSettings &&
                              'multiple' ===
                                n.meta.projectSettings.detectionMode &&
                              t.selectTarget(-1),
                            l('detecting')
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              ),
              [A, n, l, k]
            ),
            P = Object(r.useCallback)(
              Object(m.a)(
                f.a.mark(function e() {
                  return f.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !['', 'inited', 'confirmed', 'launching'].includes(
                              u
                            )
                          ) {
                            e.next = 2
                            break
                          }
                          return e.abrupt('return')
                        case 2:
                          return a.current.stop(), (e.next = 6), M()
                        case 6:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              ),
              [u, M]
            ),
            D = Object(r.useCallback)(
              function (e) {
                T(e)
              },
              [T]
            ),
            R = Object(r.useCallback)(
              function (e) {
                l('showing')
              },
              [l]
            ),
            L = Object(r.useCallback)(
              function (e) {
                l('detecting')
              },
              [l]
            ),
            I = Object(r.useCallback)(function (e) {
              a.current.startAnchorAndShowTarget(e)
            }, []),
            U = Object(r.useCallback)(
              (function () {
                var e = Object(m.a)(
                  f.a.mark(function e(t) {
                    var r, s, o, c, u
                    return f.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((r = t.container), !a.current)) {
                              e.next = 4
                              break
                            }
                            return (
                              console.error('ar container inited'),
                              e.abrupt('return')
                            )
                          case 4:
                            return (
                              (s = document.createElement('div')),
                              (o = new me(s)),
                              (c = !1),
                              n &&
                                n.meta &&
                                n.meta.projectSettings &&
                                n.meta.projectSettings.regionCaptureEnabled &&
                                (c = !0),
                              (u = new ye({
                                container: r,
                                regionCaptureEnabled: c,
                                player: o,
                                onDetected: function (e) {
                                  R(e)
                                },
                                onUndetected: function (e) {
                                  L()
                                },
                                onCapturedPhoto: function (e) {
                                  D(e)
                                },
                              })),
                              (e.next = 11),
                              o.init(n.targets, !1, u)
                            )
                          case 11:
                            ;(a.current = u), (i.current = o), l('inited')
                          case 14:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  })
                )
                return function (t) {
                  return e.apply(this, arguments)
                }
              })(),
              [n, l, R, L, D]
            ),
            V = Object(r.useCallback)(
              Object(m.a)(
                f.a.mark(function e() {
                  return f.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            l('confirmed'),
                            (e.next = 3),
                            i.current.dummyTrigger()
                          )
                        case 3:
                          M()
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              ),
              [l, M]
            ),
            _ = Object(r.useCallback)(
              function (e) {
                a.current.selectTarget(e), v(e)
              },
              [v]
            ),
            B = Object(r.useCallback)(
              function () {
                var e = !y,
                  t = a.current
                !e || t.isARSupported ? (j(e), A(e)) : t.stop()
              },
              [y, j, A]
            )
          Object(r.useEffect)(
            function () {
              var e,
                t = function () {
                  e && clearTimeout(e),
                    (e = setTimeout(function () {
                      P()
                    }, 100))
                }
              return (
                window.addEventListener('resize', t),
                function () {
                  window.removeEventListener('resize', t)
                }
              )
            },
            [P]
          ),
            Object(r.useEffect)(function () {
              return function () {
                a.current && a.current.destroy()
              }
            }, [])
          var F = {
            handleInit: U,
            handleConfirm: V,
            handleChangeTargetIndex: _,
            handleShowAnchorTarget: I,
            handleToggleMode: B,
            onShowTarget: R,
            onHideTarget: L,
            viewerStatus: u,
            targetIndex: h,
            isARMode: y,
            isARSupported: O,
            capturedPhoto: C,
            setCapturedPhoto: T,
          }
          return Object(je.jsx)(we.Provider, { value: F, children: t })
        },
        Oe = function () {
          return Object(r.useContext)(we)
        },
        ke = n(71),
        Se = n.n(ke),
        Ee = n(104),
        Ce = (function () {
          var e = Object(m.a)(
            f.a.mark(function e(t) {
              var n, r, a, i, s, o, c, u, l, p, d, h, m, v, b, g
              return f.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), fetch(t)
                      case 2:
                        return (n = e.sent), (e.next = 5), n.blob()
                      case 5:
                        return (
                          (r = e.sent),
                          (a = new Se.a()),
                          (e.next = 9),
                          a.loadAsync(r)
                        )
                      case 9:
                        return (
                          (e.next = 11),
                          a.file('targets.mind').async('arrayBuffer')
                        )
                      case 11:
                        return (
                          (i = e.sent),
                          (e.t0 = JSON),
                          (e.next = 15),
                          a.file('meta.json').async('string')
                        )
                      case 15:
                        return (
                          (e.t1 = e.sent),
                          (s = e.t0.parse.call(e.t0, e.t1)),
                          (e.t2 = JSON),
                          (e.next = 20),
                          a.file('targets.json').async('string')
                        )
                      case 20:
                        ;(e.t3 = e.sent),
                          (o = e.t2.parse.call(e.t2, e.t3)),
                          (c = 0)
                      case 23:
                        if (!(c < o.length)) {
                          e.next = 60
                          break
                        }
                        return (
                          (u = o[c]),
                          (e.next = 27),
                          a.file('images/image' + c).async('blob')
                        )
                      case 27:
                        return (l = e.sent), (e.next = 30), Ee.fromBlob(l)
                      case 30:
                        ;(p = e.sent),
                          (u.imageTarget.assetBlob = new Blob([l], {
                            type: p.mime,
                          })),
                          (d = Object(I.a)(u.contents)),
                          (e.prev = 33),
                          d.s()
                      case 35:
                        if ((h = d.n()).done) {
                          e.next = 49
                          break
                        }
                        if ('asset' !== (m = h.value).type) {
                          e.next = 47
                          break
                        }
                        return (
                          (v = m.asset.id),
                          (e.next = 41),
                          a.file('assets/' + v).async('blob')
                        )
                      case 41:
                        return (b = e.sent), (e.next = 44), Ee.fromBlob(b)
                      case 44:
                        'audio/vnd.wave' === (g = e.sent).mime &&
                          (g.mime = 'audio/mpeg'),
                          (m.assetBlob = new Blob([b], { type: g.mime }))
                      case 47:
                        e.next = 35
                        break
                      case 49:
                        e.next = 54
                        break
                      case 51:
                        ;(e.prev = 51), (e.t4 = e.catch(33)), d.e(e.t4)
                      case 54:
                        return (e.prev = 54), d.f(), e.finish(54)
                      case 57:
                        c++, (e.next = 23)
                        break
                      case 60:
                        return e.abrupt('return', {
                          targets: o,
                          meta: s,
                          mindBuffer: i,
                        })
                      case 61:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[33, 51, 54, 57]]
              )
            })
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        Te = fe.loadImage,
        Ae = 'https://pictarize-storage.nyc3.digitaloceanspaces.com',
        Me = 'https://backend.pictarize.com',
        Pe = a.a.createContext(),
        De = function (e) {
          var t = e.children,
            n = Object(r.useState)(null),
            a = Object(o.a)(n, 2),
            i = a[0],
            s = a[1],
            c = Object(r.useCallback)(
              Object(m.a)(
                f.a.mark(function e() {
                  return f.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          s(null)
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              ),
              [s]
            ),
            u = Object(r.useCallback)(
              Object(m.a)(
                f.a.mark(function e() {
                  var t, n, r, a, i, o, c, u, l, p, d, h, m, v, b, g, y, j
                  return f.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = new URLSearchParams(
                                window.location.search
                              )),
                              (n = t.get('buildId')),
                              (r = t.get('projectId')),
                              (a = !0),
                              n)
                            ) {
                              e.next = 40
                              break
                            }
                            if (
                              ((a = !1),
                              (i =
                                !!window.location.host.split('.')[1] &&
                                window.location.host.split('.')[0]),
                              (o = i || window.location.pathname.substring(1)))
                            ) {
                              e.next = 10
                              break
                            }
                            return e.abrupt('return')
                          case 10:
                            return (
                              (e.prev = 10),
                              Me + '/serve/valid-subscription',
                              (e.next = 14),
                              fetch(
                                'https://backend.pictarize.com/serve/valid-subscription',
                                {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json',
                                  },
                                  body: JSON.stringify({ projectKey: o }),
                                }
                              )
                            )
                          case 14:
                            return (c = e.sent), (e.next = 17), c.json()
                          case 17:
                            e.sent.valid || (a = !0), (e.next = 24)
                            break
                          case 21:
                            ;(e.prev = 21),
                              (e.t0 = e.catch(10)),
                              console.log('valid subscription error', e.t0)
                          case 24:
                            return (
                              (e.prev = 24),
                              (u = Ae + '/releases/' + o + '.json'),
                              (e.next = 28),
                              fetch(u, { cache: 'no-store' })
                            )
                          case 28:
                            return (l = e.sent), (e.next = 31), l.json()
                          case 31:
                            ;(p = e.sent),
                              (n = p.buildId),
                              (r = p.projectId),
                              (e.next = 40)
                            break
                          case 36:
                            return (
                              (e.prev = 36),
                              (e.t1 = e.catch(24)),
                              console.log('e', e.t1),
                              e.abrupt('return')
                            )
                          case 40:
                            return (
                              n &&
                                r &&
                                (a
                                  ? (Me + '/view/preview',
                                    fetch(
                                      'https://backend.pictarize.com/view/preview',
                                      {
                                        method: 'POST',
                                        headers: {
                                          'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                          projectId: r,
                                          buildId: n,
                                        }),
                                      }
                                    ).catch(function (e) {
                                      console.log('analytic error', e)
                                    }))
                                  : (Me + '/view/release',
                                    fetch(
                                      'https://backend.pictarize.com/view/release',
                                      {
                                        method: 'POST',
                                        headers: {
                                          'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({ projectId: r }),
                                      }
                                    ).catch(function (e) {
                                      console.log('analytic error', e)
                                    }))),
                              (d = Ae + '/projects/' + r + '/' + n),
                              (h = []),
                              (e.next = 45),
                              Ce(d)
                            )
                          case 45:
                            ;(m = e.sent),
                              (v = m.targets),
                              (b = m.meta),
                              (g = m.mindBuffer),
                              (y = 0)
                          case 50:
                            if (!(y < v.length)) {
                              e.next = 58
                              break
                            }
                            return (e.next = 53), Te(v[y].imageTarget.assetBlob)
                          case 53:
                            ;(j = e.sent), h.push(j)
                          case 55:
                            y++, (e.next = 50)
                            break
                          case 58:
                            s({
                              isPreview: a,
                              targetImages: h,
                              targets: v,
                              mindBuffer: g,
                              meta: b,
                            })
                          case 59:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [
                      [10, 21],
                      [24, 36],
                    ]
                  )
                })
              ),
              [s]
            ),
            l = Object(r.useMemo)(
              function () {
                return { project: i, loadProject: u, unloadProject: c }
              },
              [i, u, c]
            )
          return Object(je.jsx)(Pe.Provider, { value: l, children: t })
        },
        Re = function () {
          return Object(r.useContext)(Pe)
        },
        Le = function () {
          var e = Re().project,
            t = Object(r.useState)(!1),
            n = Object(o.a)(t, 2),
            a = n[0],
            i = n[1],
            s = Object(r.useState)(null),
            c = Object(o.a)(s, 2),
            h = c[0],
            f = c[1],
            m = Oe(),
            v = m.viewerStatus,
            b = m.targetIndex,
            g = m.isARSupported,
            y = m.handleChangeTargetIndex,
            j = m.handleShowAnchorTarget,
            w = Object(r.useCallback)(
              function (e) {
                y(e.realIndex)
              },
              [y]
            ),
            x = Object(r.useCallback)(
              function () {
                g || j(b)
              },
              [j, b, g]
            ),
            O = Object(r.useMemo)(
              function () {
                return e ? e.targetImages : []
              },
              [e]
            ),
            k = Object(r.useMemo)(
              function () {
                return !(
                  e &&
                  e.meta &&
                  e.meta.projectSettings &&
                  'multiple' === e.meta.projectSettings.detectionMode
                )
              },
              [e]
            ),
            S = Object(r.useCallback)(
              function (e) {
                e.stopPropagation(), i(!0)
              },
              [i]
            ),
            E = Object(r.useCallback)(
              function () {
                i(!1)
              },
              [i]
            ),
            C = Object(r.useCallback)(
              function (e) {
                h.slideTo(e + 1), E()
              },
              [h, E]
            )
          return (
            Object(r.useEffect)(
              function () {
                var e = function () {
                  E()
                }
                return (
                  document.body.addEventListener('click', e),
                  function () {
                    document.body.removeEventListener('click', e)
                  }
                )
              },
              [E]
            ),
            '' === v
              ? null
              : Object(je.jsxs)('div', {
                  className: u()(
                    { hide: 'showing' === v, unseen: 'detecting' !== v },
                    'overlay scanning'
                  ),
                  children: [
                    Object(je.jsxs)('div', {
                      className: 'inner',
                      onClick: x,
                      children: [
                        k &&
                          Object(je.jsx)(l.a, {
                            onSwiper: f,
                            loop: !0,
                            spaceBetween: 0,
                            onSlideChange: w,
                            slidesPerView: 1,
                            className: 'inner-swiper',
                            children:
                              e &&
                              e.targetImages.map(function (e, t) {
                                return Object(je.jsx)(
                                  p.a,
                                  {
                                    children: Object(je.jsx)('img', {
                                      alt: 'target',
                                      src: e.src,
                                    }),
                                  },
                                  t
                                )
                              }),
                          }),
                        g && Object(je.jsx)('div', { className: 'scanline' }),
                        !g &&
                          Object(je.jsxs)('div', {
                            className: 'launch-guide',
                            children: [
                              Object(je.jsx)('div', {
                                className: 'text',
                                children: 'Click to Launch effect',
                              }),
                              Object(je.jsx)(d.a, { icon: 'hand-pointer' }),
                            ],
                          }),
                      ],
                    }),
                    Object(je.jsx)('div', {
                      className: u()({ show: a }, 'selection'),
                      onClick: E,
                      children: Object(je.jsx)('div', {
                        className: 'items',
                        children: O.map(function (e, t) {
                          return Object(je.jsx)(
                            'div',
                            {
                              className: 'item',
                              children: Object(je.jsx)('img', {
                                alt: 'target',
                                src: e.src,
                                onClick: function () {
                                  return C(t)
                                },
                              }),
                            },
                            t
                          )
                        }),
                      }),
                    }),
                    k &&
                      !a &&
                      Object(je.jsx)('div', {
                        className: 'dropdown',
                        onClick: S,
                        children:
                          e &&
                          e.targetImages[b] &&
                          Object(je.jsx)('img', {
                            alt: 'target',
                            src: e.targetImages[b].src,
                            onClick: E,
                          }),
                      }),
                  ],
                })
          )
        },
        Ie = function () {
          return Object(je.jsx)('div', {
            className: 'overlay loading',
            children: Object(je.jsx)('div', { className: 'loader' }),
          })
        },
        Ue = function () {
          var e = Oe(),
            t = e.capturedPhoto,
            n = e.setCapturedPhoto,
            a = Object(r.useState)(!1),
            i = Object(o.a)(a, 2),
            s = i[0],
            c = i[1],
            u = Object(r.useCallback)(
              function () {
                n(null)
              },
              [n]
            ),
            l = Object(r.useCallback)(
              Object(m.a)(
                f.a.mark(function e() {
                  var n
                  return f.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          ;((n = document.createElement('a')).download =
                            'photo.png'),
                            (n.href = t),
                            n.click()
                        case 4:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              ),
              [t]
            ),
            p = Object(r.useCallback)(
              Object(m.a)(
                f.a.mark(function e() {
                  var n, r, a, i, s, o, u
                  return f.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return c(!0), (e.next = 3), fetch(t)
                        case 3:
                          return (e.next = 5), e.sent.blob()
                        case 5:
                          return (
                            (n = e.sent),
                            'https://backend.pictarize.com/serve/get-share-upload',
                            (e.next = 9),
                            fetch(
                              'https://backend.pictarize.com/serve/get-share-upload',
                              {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                              }
                            ).catch(function (e) {
                              console.log('get upload error', e)
                            })
                          )
                        case 9:
                          return (r = e.sent), (e.next = 12), r.json()
                        case 12:
                          return (
                            (a = e.sent),
                            (i = a.url),
                            (s = a.url.split('?')[0]),
                            (o = new File([n], 'photo.png', {
                              type: n.type,
                              lastModified: new Date().getTime(),
                            })),
                            (e.next = 18),
                            fetch(i, {
                              method: 'PUT',
                              body: o,
                              headers: { 'x-amz-acl': 'public-read' },
                            })
                          )
                        case 18:
                          if (e.sent.ok) {
                            e.next = 22
                            break
                          }
                          return c(!1), e.abrupt('return')
                        case 22:
                          if (
                            ((u = { url: s }),
                            navigator.canShare && navigator.canShare(u))
                          ) {
                            e.next = 27
                            break
                          }
                          return (
                            console.log('share not availble'),
                            c(!1),
                            e.abrupt('return')
                          )
                        case 27:
                          navigator.share(u), c(!1)
                        case 29:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              ),
              [t, c]
            )
          return t
            ? Object(je.jsxs)('div', {
                className: 'capture-preview',
                children: [
                  Object(je.jsxs)('div', {
                    className: 'image-container',
                    children: [
                      Object(je.jsx)('img', {
                        alt: 'capture',
                        className: 'preview-photo',
                        src: t,
                      }),
                      Object(je.jsx)('button', {
                        className: 'close-button',
                        onClick: u,
                        children: 'X',
                      }),
                    ],
                  }),
                  Object(je.jsxs)('div', {
                    className: 'preview-control',
                    children: [
                      Object(je.jsx)('button', {
                        className: 'download-button',
                        onClick: l,
                        disabled: s,
                        children: 'Download',
                      }),
                      Object(je.jsx)('button', {
                        className: 'share-button',
                        onClick: p,
                        disabled: s,
                        children: 'Share',
                      }),
                    ],
                  }),
                  s &&
                    Object(je.jsx)('div', {
                      className: 'overlay loading',
                      children: Object(je.jsx)('div', { className: 'loader' }),
                    }),
                ],
              })
            : null
        },
        Ve = function () {
          var e = Oe(),
            t = e.viewerStatus,
            n = e.handleConfirm
          return 'inited' !== t
            ? null
            : Object(je.jsx)('div', {
                className: 'pre-start overlay',
                children: Object(je.jsxs)('div', {
                  className: 'inner',
                  children: [
                    Object(je.jsx)('div', {
                      children: 'please allow camera access for AR effects',
                    }),
                    Object(je.jsx)('button', {
                      onClick: n,
                      children: 'Continue',
                    }),
                  ],
                }),
              })
        },
        _e = n.p + 'static/media/ar-on.87bb1099.png',
        Be = n.p + 'static/media/ar-off.27305b33.png',
        Fe = function () {
          var e = Object(r.useRef)(null),
            t = Re().project,
            n = Oe(),
            a = n.handleInit,
            i = n.isARMode,
            s = n.viewerStatus,
            o = n.handleToggleMode
          return (
            Object(r.useEffect)(
              function () {
                a({ project: t, container: e.current })
              },
              [t, a]
            ),
            Object(je.jsxs)('div', {
              className: 'viewer-container',
              ref: e,
              children: [
                Object(je.jsx)(Le, {}),
                Object(je.jsx)(Ue, {}),
                'launching' === s && Object(je.jsx)(Ie, {}),
                Object(je.jsx)(Ve, {}),
                'showing' === s &&
                  Object(je.jsxs)('div', {
                    className: 'anchor-control',
                    children: [
                      i &&
                        Object(je.jsx)('img', {
                          src: _e,
                          alt: 'ar-mode',
                          onClick: o,
                        }),
                      !i &&
                        Object(je.jsx)('img', {
                          src: Be,
                          alt: 'ar-mode',
                          onClick: o,
                        }),
                    ],
                  }),
              ],
            })
          )
        },
        Ne = function () {
          var e = Re().project
          return e && e.isPreview
            ? Object(je.jsx)('div', {
                className: 'preview-overlay overlay',
                children: Object(je.jsxs)('div', {
                  children: [
                    'This AR effect was designed with pictarize.com - AR studio. Create your effect now for free.',
                    Object(je.jsx)('a', {
                      href: 'https://pictarize.com',
                      alt: 'pictarize',
                      target: '_blank',
                      rel: 'noreferrer',
                      children: 'Start Now',
                    }),
                  ],
                }),
              })
            : null
        },
        ze = n.p + 'static/media/powered-by.eccfa7da.png',
        He = function () {
          var e = Re().project
          return e && e.isPreview
            ? Object(je.jsx)('div', {
                className: u()(
                  { hasPreview: e && e.isPreview },
                  'poweredby-overlay overlay'
                ),
                children: Object(je.jsx)('img', {
                  src: ze,
                  alt: 'Pictarize Studio',
                }),
              })
            : null
        },
        We = function () {
          var e = Re(),
            t = e.project,
            n = e.loadProject,
            a = e.unloadProject,
            i = Object(r.useState)(!0),
            s = Object(o.a)(i, 2),
            c = s[0],
            u = (s[1], Object(r.useState)(!1)),
            l = Object(o.a)(u, 2),
            p = l[0],
            d = l[1]
          return (
            Object(r.useEffect)(
              function () {
                c ? n() : a()
              },
              [n, a, c]
            ),
            Object(r.useEffect)(
              function () {
                t &&
                  (function (e, t) {
                    var n = document.getElementById('mind-ar-lib'),
                      r = e.meta && e.meta.mindVersion
                    if ((r || (r = 1), !n)) {
                      var a = document.createElement('script'),
                        i = '/vendor/mindar/mindar.prod.v' + r + '.js'
                      ;(a.src = i),
                        (a.id = 'mind-ar-lib'),
                        document.body.appendChild(a),
                        (a.onload = function () {
                          t && t()
                        })
                    }
                    n && t && t()
                  })(t, function () {
                    d(!0)
                  })
              },
              [t, d]
            ),
            Object(je.jsxs)('div', {
              className: 'App',
              children: [
                false,
                Object(je.jsx)(Ne, {}),
                Object(je.jsx)(He, {}),
                !(t && p) && Object(je.jsx)(Ie, {}),
                t &&
                  p &&
                  Object(je.jsx)(xe, {
                    project: t,
                    children: Object(je.jsx)(Fe, {}),
                  }),
              ],
            })
          )
        },
        Ge = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 139))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  i = t.getLCP,
                  s = t.getTTFB
                n(e), r(e), a(e), i(e), s(e)
              })
        },
        Ye = n(26),
        Xe = n(32)
      Ye.b.add(Xe.d, Xe.a, Xe.e, Xe.b, Xe.c)
      n(132)
      var Je = n(137),
        qe = n(136)
      Je.a.use([qe.a]),
        s.a.render(
          Object(je.jsx)(a.a.StrictMode, {
            children: Object(je.jsx)(De, { children: Object(je.jsx)(We, {}) }),
          }),
          document.getElementById('root')
        ),
        Ge()
    },
    77: function (e, t, n) {},
  },
  [[133, 1, 2]],
])
//# sourceMappingURL=main.f68eee47.chunk.js.map
