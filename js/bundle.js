! function() {
    "use strict";
    var e, t, n = Laya.View,
        a = Laya.Dialog,
        i = Laya.Scene,
        o = Laya.ClassUtils.regClass;
    ! function(e) {
        ! function(e) {
            class t extends n {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/LodingView");
                }
            }
            e.LodingViewUI = t, o("ui.Views.LodingViewUI", t);
            class s extends i {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/MutualpushView");
                }
            }
            e.MutualpushViewUI = s, o("ui.Views.MutualpushViewUI", s);
            class l extends n {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/SettlementView");
                }
            }
            e.SettlementViewUI = l, o("ui.Views.SettlementViewUI", l);
            class r extends a {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/SignInDialog");
                }
            }
            e.SignInDialogUI = r, o("ui.Views.SignInDialogUI", r);
            class d extends i {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/SkinView");
                }
            }
            e.SkinViewUI = d, o("ui.Views.SkinViewUI", d);
            class c extends a {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/SMSMView");
                }
            }
            e.SMSMViewUI = c, o("ui.Views.SMSMViewUI", c);
            class h extends n {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/StartView");
                }
            }
            e.StartViewUI = h, o("ui.Views.StartViewUI", h);
            class _ extends a {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/ToastDialog");
                }
            }
            e.ToastDialogUI = _, o("ui.Views.ToastDialogUI", _);
            class p extends a {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/TrySkinView");
                }
            }
            e.TrySkinViewUI = p, o("ui.Views.TrySkinViewUI", p);
            class y extends a {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/TryView");
                }
            }
            e.TryViewUI = y, o("ui.Views.TryViewUI", y);
            class g extends a {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("Views/TurntableDialog");
                }
            }
            e.TurntableDialogUI = g, o("ui.Views.TurntableDialogUI", g);
        }(e.Views || (e.Views = {}));
    }(e || (e = {})),
    function(e) {
        e.HFMath = class {
            static random(e, t) {
                let n = t - e;
                return Math.floor(Math.random() * n + e);
            }
        };
        class t {
            static load(e, n, a) {
                Laya.loader.create(e, n, a, t.HIERARCHY);
            }
        }
        t.HIERARCHY = "HIERARCHY", e.Scene3D = t;
        class n {
            static load(e, t, a) {
                Laya.loader.create(e, t, a, n.HIERARCHY);
            }
        }
        n.HIERARCHY = "HIERARCHY", e.Sprite3D = n;
        class a {
            static GetIntItem(e, t = 0) {
                let n = Laya.LocalStorage.getItem(a.projectname + e);
                return console.log("pxl GetIntItem name:" + e + ";a:" + n + ";type:" + typeof n),
                    n ? Number.parseInt(n) ? Number.parseInt(n) : t : (Laya.LocalStorage.setItem(a.projectname + e, JSON.stringify(t)),
                        t);
            }
            static IsNull(e) {
                return !Laya.LocalStorage.getItem(a.projectname + e);
            }
            static GetFloatItem(e, t = 0) {
                let n = Laya.LocalStorage.getItem(a.projectname + e);
                return n ? Number.parseFloat(n) : (Laya.LocalStorage.setItem(a.projectname + e, JSON.stringify(t)),
                    t);
            }
            static GetIntItemSameDay(t, n) {
                let a = Math.floor(Date.now() / 864e5),
                    i = {
                        d: a,
                        n: n
                    };
                return (i = e.LocalStorage.GetObjectItem(t, i)).d != a && (i.d = a, i.n = n, e.LocalStorage.SetObjectItem(t, i)),
                    i.n;
            }
            static SetIntItemSameDay(t, n) {
                let a = {
                    d: Math.floor(Date.now() / 864e5),
                    n: n
                };
                e.LocalStorage.SetObjectItem(t, a);
            }
            static GetObjItemSameDay(t, n = {}) {
                let a = Math.floor(Date.now() / 864e5),
                    i = {
                        d: a,
                        n: n
                    };
                return (i = e.LocalStorage.GetObjectItem(t, i)).d != a && (i.d = a, i.n = n, e.LocalStorage.SetObjectItem(t, i)),
                    i.n;
            }
            static SetObjItemSameDay(t, n = {}) {
                let a = {
                    d: Math.floor(Date.now() / 864e5),
                    n: n
                };
                e.LocalStorage.SetObjectItem(t, a);
            }
            static SetIntItem(e, t = 0) {
                Laya.LocalStorage.setItem(a.projectname + e, JSON.stringify(t));
            }
            static SetFloatItem(e, t = 0) {
                Laya.LocalStorage.setItem(a.projectname + e, JSON.stringify(t));
            }
            static GetStringItem(e, t = "") {
                let n = Laya.LocalStorage.getItem(a.projectname + e);
                return n || (Laya.LocalStorage.setItem(a.projectname + e, t), t);
            }
            static SetStringItem(e, t = "") {
                Laya.LocalStorage.setItem(a.projectname + e, t);
            }
            static GetObjectItem(e, t = {}) {
                let n = Laya.LocalStorage.getItem(a.projectname + e);
                return n ? JSON.parse(n) : (Laya.LocalStorage.setItem(a.projectname + e, JSON.stringify(t)),
                    t);
            }
            static SetObjectItem(e, t = {}) {
                Laya.LocalStorage.setItem(a.projectname + e, JSON.stringify(t));
            }
            static loadCacheImage(e, t) {}
        }
        a.projectname = "Blob-Giant-3D-", e.LocalStorage = a;
        e.Button = class {
            static OnClickScale(e, t, n = 200, a = 100) {
                let i = e.scaleX,
                    o = e.scaleY,
                    s = !1;
                e.on(Laya.Event.MOUSE_DOWN, null, () => {
                    Laya.Tween.clearAll(e), Laya.Tween.to(e, {
                        scaleX: .95 * i,
                        scaleY: .95 * o
                    }, n), s = !0;
                }), e.on(Laya.Event.MOUSE_UP, null, () => {
                    s && (Laya.Tween.clearAll(e), Laya.timer.once(a, t.caller, t.method, t.args), Laya.Tween.to(e, {
                        scaleX: i,
                        scaleY: o
                    }, a)), s = !1;
                }), e.on(Laya.Event.MOUSE_OUT, null, () => {
                    Laya.Tween.clearAll(e), Laya.Tween.to(e, {
                        scaleX: i,
                        scaleY: o
                    }, a), s = !1;
                });
            }
            static BreathingScale(t, n = 1e3, a = 1e3, i = null, o = .95, s = .95) {
                let l = t.scaleX,
                    r = t.scaleY;
                0 != Laya.stage.contains(t) && (Laya.Tween.clearAll(t), Laya.Tween.to(t, {
                    scaleX: l * o,
                    scaleY: r * s
                }, n, null, Laya.Handler.create(null, () => {
                    let d = t.visible;
                    i && d && (d = i.visible), 0 == d ? (t.set_scaleX(l), t.set_scaleY(r)) : Laya.Tween.to(t, {
                        scaleX: l,
                        scaleY: r
                    }, a, null, Laya.Handler.create(null, () => {
                        let d = t.visible;
                        i && d && (d = i.visible), 0 == d ? (t.set_scaleX(l), t.set_scaleY(r)) : e.Button.BreathingScale(t, n, a, i, o, s);
                    }));
                })));
            }
        };
    }(t || (t = {}));
    var s, l, r = {};

    function GetInstate(e) {
        let t = e.name;
        if (t in r) return r[t]; {
            let n = new e();
            return r[t] = n, n;
        }
    }! function(e) {
        e[e.READY = 0] = "READY", e[e.PLAY = 1] = "PLAY", e[e.DEATH = 2] = "DEATH", e[e.END = 3] = "END",
            e[e.FINISH = 4] = "FINISH";
    }(s || (s = {}));
    class d {
        constructor() {
            this.GameState = s.READY, this.Level = null, this.js = null, this.Player = null,
                this.PlayerHeadNode = null, this.directionLight = null, this.LevelIndex = 1, this.Tips = null,
                this.Skin = {}, this.currency = 0, this.limitedSkin = !1, this.isGameStart = !1,
                this.isFirstEnterIn = !0, this.CurLevel = 1, this.CurPlayTimes = 0, this.level_currency = 0,
                this.levelDouble = 1, this.curGoldMult = 1, this.mengdianjindu = 0, this.isMainViewVisible = !0,
                this.isRewardStep = !1, this.attackHurtNum = 4.5, this.curAttackHurtMult = 0, this.curGoldLv = 0,
                this.curAttackHurtLv = 1, this.isNewUser = !1, this.isStartKuangdian = !1, this.isClosePlayerTouch = !1,
                this.todayWuchuTimes = 0, this.setting = {
                    Lc_ADClickTouchType: 0,
                    Lc_ADClickTouchTypeN: 0,
                    Lc_AutoVideoGuide: 0,
                    Lc_AutoAddDesk: 0,
                    Lc_YuanShengShowHall: 0,
                    Lc_Kuangdian: 0,
                    Lc_city: 0
                };
        }
        static get Instate() {
            return GetInstate(d);
        }
        ShowTips(e) {
            Laya.Tween.clearAll(this.Tips), this.Tips.visible = !0, this.Tips.pos(0, 272), this.Tips.getChildAt(0).text = e,
                Laya.Tween.to(this.Tips, {
                    y: 250
                }, 500, null, Laya.Handler.create(null, () => {
                    Laya.timer.once(1e3, null, () => {
                        d.Instate.Tips.visible = !1;
                    });
                }));
        }
    }
    class c extends Laya.Script3D {
        onAwake() {
            this.gameObject = this.owner, this.transfrom = this.gameObject.transform, this.OnAwake();
        }
        OnAwake() {}
        Find(e) {
            let t = e.split("/"),
                n = this.gameObject;
            for (let e = 0; e < t.length; e++) {
                const a = t[e];
                n = n.getChildByName(a);
            }
            return n;
        }
    }
    class h {
        constructor() {
            this.isDome = !1, this.Hanle = null, this.size = new Laya.Vector2(), this.sizek = new Laya.Vector2(),
                this.mousexup = 0, this.mouseyup = 0, this.DetaMouseX = 0, this.DetaMouseY = 0,
                this.isMouseUpOnce = !1, h.Instate = this, this.onAwake();
        }
        onAwake() {
            this.Hanle = [], Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.Mouse),
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.MouseUp),
                Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.MouseUp),
                Laya.stage.on(Laya.Event.BLUR, this, this.MouseUp),
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.MouseMove),
                this.size.x = Laya.Browser.clientWidth, this.size.y = Laya.Browser.clientHeight,
                this.sizek.x = this.size.x / 750, this.sizek.y = this.size.y / 1280, this.sizek.x = .6;
        }
        Mouse() {
            this.isDome = !0, this.mousexup = Laya.MouseManager.instance.mouseX, this.mouseyup = Laya.MouseManager.instance.mouseY;
        }
        MouseUp(e) {
            e && e.touches ? e.touches.length <= 0 && (this.isDome = !1, this.DetaMouseX = 0, this.DetaMouseY = 0) :
                (this.isDome = !1, this.DetaMouseX = 0, this.DetaMouseY = 0);
        }
        MouseMove(e) {
            console.log(this.isDome)
            this.isDome && (this.DetaMouseX = Laya.MouseManager.instance.mouseX - this.mousexup,
                this.DetaMouseY = Laya.MouseManager.instance.mouseY - this.mouseyup, this.mousexup = Laya.MouseManager.instance.mouseX,
                this.mouseyup = Laya.MouseManager.instance.mouseY, this.Distribute(!1));
        }
        Register(e) {
            this.Hanle.push(e);
        }
        Clear() {
            this.Hanle = [];
        }
        Distribute(e) {
            this.isMouseUpOnce = e;
            for (let e = 0; e < this.Hanle.length; e++) {
                const t = this.Hanle[e];
                t.method.call(t.caller, this), this.DetaMouseX = 0, this.DetaMouseY = 0;
            }
        }
    }
    class _ {}
    _.MovingSpeed = 8, _.MovingSpeedQuick = 12, _.onceAdd = .09, _.onceDel = .09, _.onceAddFirst = .2,
        _.onceDelFirst = .2, _.minScale = .5, _.maxScale = 2.8, _.InvincibleTime = 12, _.oncechange = 20,
        _.oneGoldAdd = 5, _.gravity = -16, _.TurntableConfig = [
            [1, 100, .5],
            [1, 800, .5],
            [1, 600, .5],
            [1, 400, .5],
            [1, 1e3, .5],
            [1, 600, .5],
            [1, 1e3, .5],
            [2, 1001, 1e-4, 1200]
        ],
        _.BuySkin = {
            1000: !0
        }, _.skinBag = 1003, _.signIn = [200, 300, 500, 800, 1200, 2e3, 3e3], _.PlayerSkinIcon = {
            1000: "skin/tx_1.png",
            1001: "skin/tx_3.png",
            1002: "skin/tx_2.png",
            1003: "skin/tx_5.png",
            1004: "skin/tx_6.png",
            1005: "skin/tx_4.png"
        }, _.PlayerModeIcon = {
            1000: "skin/01_p_ltpk.png",
            1001: "skin/03_p_ltpk.png",
            1002: "skin/02_p_ltpk.png",
            1003: "skin/05_p_ltpk.png",
            1004: "skin/06_p_ltpk.png",
            1005: "skin/04_p_ltpk.png"
        }, _.DefaultPayerSKin = "1000", _.PlayerSkinPrice = 5000, _.VideoSkinDiamonds = 2e3,
        _.MusicConfig = {
            BG: "res/mp3/bg.mp3",
            CLICK: "res/mp3/click.mp3",
            FAIL: "res/mp3/fail.mp3",
            GOLD: "res/mp3/gold.mp3",
            Eat: "res/mp3/eating.mp3",
            WIN: "res/mp3/win.mp3",
            Hited: "res/mp3/hit.mp3",
            DICI: "res/mp3/dici.mp3",
            STAR: "res/mp3/star.mp3",
            RONGYAN: "res/mp3/rongyan.mp3",
            GROUND: "res/mp3/ground.mp3",
            CHANGECOLOR: "res/mp3/changeColor.mp3",
            EatNO: "res/mp3/eatFalse.mp3",
            UPGrade: "res/mp3/upGrade.mp3",
            FLY: "res/mp3/fly.mp3",
            ARRIVEDTOP: "res/mp3/arrivedtop.mp3",
            JUMP: "res/mp3/jump.mp3"
        }, _.wudian = 0, _.PutDesktopNum = 2;
    class p {
        constructor() {
            this.eventlist = {};
        }
        static get Instate() {
            return null == p._instate && (p._instate = new p()), p._instate;
        }
        Register(e, t) {
            e in this.eventlist ? this.eventlist[e].push(t) : this.eventlist[e] = [t];
        }
        RegisterOne(e, t) {
            this.eventlist[e] = [t];
        }
        ReMoveTypeAll(e) {
            e in this.eventlist && (this.eventlist[e] = []);
        }
        Distribute(e, t, ...n) {
            e in this.eventlist && this.eventlist[e].forEach(e => {
                e.method.call(e.caller, t, ...n);
            });
        }
    }
    p._instate = null;
    class y {
        constructor() {
            this.List = [], this.Init();
        }
        Init() {
            Laya.timer.frameLoop(1, this, this.Update), y.Uptime = Laya.timer._lastTimer;
        }
        Update() {
            y.delta = Laya.timer._lastTimer - y.Uptime, y.Uptime = Laya.timer._lastTimer;
            for (let e = 0; e < this.List.length; e++)
                if (this.List[e].Stop) {
                    if (!this.List[e].Ac) {
                        this.List.splice(e, 1), e--;
                        continue;
                    }
                    this.List[e] = this.List[e].Ac;
                } else this.List[e].gameObject && this.List[e].Run();
        }
        AddAction(e) {
            this.List.push(e);
        }
        RemoveAll() {
            this.List = [];
        }
        RemoveObjAll(e) {
            for (let t = 0; t < this.List.length; t++) this.List[t].gameObject.id == e.id && (this.List[t].ResetNode(),
                this.List.splice(t, 1), t--);
        }
        RemoveAt(e) {
            for (let t = 0; t < this.List.length; t++)
                if (this.List[t] == e) {
                    this.List[t].ResetNode(), this.List.splice(t, 1), t--;
                    break;
                }
        }
    }
    y.delta = 0, y.Uptime = 0;
    class g {
        constructor(e, t, n, a, i, o, s = 1) {
            this.time = 0, this.Ac = null, this.k = 0, this.loop = !0, this.Stop = !1, this.gameObject = null,
                this.EndHandler = null, this.loopType = 1, this.k = 1 / t, this.time = 1, this.to = n.clone(),
                this.form = a.clone(), this.Ac = o, this.subv = new Laya.Vector3(), this.subv.x = this.to.x - this.form.x,
                this.subv.y = this.to.y - this.form.y, this.subv.z = this.to.z - this.form.z, this.gameObject = e,
                this.loopType = s, this.loop = i, GetInstate(y).AddAction(this);
        }
        Run() {
            if (this.time -= this.k * y.delta * .001, this.time <= 0) {
                if (this.gameObject.transform.localPosition = this.to.clone(), this.loop) {
                    if (this.time = 1, 2 == this.loopType) {
                        let e = this.to.clone();
                        this.to = this.form, this.form = e, this.subv.x = this.to.x - this.form.x, this.subv.y = this.to.y - this.form.y,
                            this.subv.z = this.to.z - this.form.z;
                    }
                } else this.Stop = !0, this.Ac && GetInstate(y).AddAction(this.Ac);
                if (this.EndHandler && this.EndHandler.method.call(this.EndHandler.caller, l.END, this), !this.loop) return;
            }
            let e = new Laya.Vector3(),
                t = 1 - this.time;
            e.x = this.form.x + this.subv.x * t, e.y = this.form.y + this.subv.y * t, e.z = this.form.z + this.subv.z * t,
                this.gameObject.transform.localPosition = e;
        }
        on(e, t) {
            switch (e) {
                case l.END:
                    this.EndHandler = t;
            }
        }
        UpdateTo(e) {
            this.to = e.clone(), this.subv = new Laya.Vector3(), this.subv.x = this.to.x - this.form.x,
                this.subv.y = this.to.y - this.form.y, this.subv.z = this.to.z - this.form.z;
        }
        ResetNode() {
            this.gameObject.transform.localPosition = this.form.clone();
        }
    }
    class u {
        constructor(e, t, n, a, i, o) {
            this.time = 0, this.Ac = null, this.k = 0, this.loop = !0, this.Stop = !1, this.gameObject = null,
                this.EndHandler = null, this.loopType = 1, this.pos = 1, this.k = 1 / t, this.time = 1,
                this.to = n, this.form = a, this.to1 = i, this.form1 = o, this.subv = new Laya.Vector3(),
                this.subv1 = new Laya.Vector3(), this.subv.x = this.to.x - this.form.x, this.subv.y = this.to.y - this.form.y,
                this.subv.z = this.to.z - this.form.z, this.subv1.x = this.to1.x - this.form1.x,
                this.subv1.y = this.to1.y - this.form1.y, this.subv1.z = this.to1.z - this.form1.z,
                this.gameObject = e, GetInstate(y).AddAction(this);
        }
        Run() {
            this.time -= this.k * y.delta * .001, this.time <= 0 && (this.gameObject.transform.localPosition = this.to,
                this.gameObject.transform.localScale = this.to1, this.Stop = !0, this.Ac && GetInstate(y).AddAction(this.Ac));
            let e = 1 - this.time;
            this.gameObject.transform.localPositionX = this.form.x + this.subv.x * e, this.gameObject.transform.localPositionY = this.form.y + this.subv.y * e,
                this.gameObject.transform.localPositionZ = this.form.z + this.subv.z * e, this.gameObject.transform.localScaleX = this.form1.x + this.subv1.x * e,
                this.gameObject.transform.localScaleY = this.form1.y + this.subv1.y * e, this.gameObject.transform.localScaleZ = this.form1.z + this.subv1.z * e;
        }
        on(e, t) {
            switch (e) {
                case l.END:
            }
        }
        ResetNode() {}
    }! function(e) {
        e[e.END = 0] = "END";
    }(l || (l = {}));
    class m {
        constructor() {
            this.first = !0, this.type = "1", this.AdCfg = null, this.loadCfg = null, this.loadcfgjson = '{"zs_ad_jump_num":2,"zs_auto_pop_ups_switch":"1","zs_banner_adunit":"","zs_banner_banner_time":2000,"zs_banner_time":"2","zs_banner_city":0,"zs_banner_horizontal_enable":1,"zs_banner_move_time":"500","zs_banner_refresh_time":30000,"zs_banner_rotate_id1":"","zs_banner_rotate_id2":"","zs_banner_rotate_id3":"","zs_banner_show_number":"2","zs_banner_show_time":1,"zs_banner_system":"","zs_banner_text_time":2000,"zs_banner_vertical_enable":1,"zs_before_finsh_jump_switch":"1","zs_click_award_add":"0.1","zs_click_award_back":"0.005","zs_click_award_city":0,"zs_click_award_num":"[1,5,6,7,9]","zs_click_award_percent":"[0.4,0.7]","zs_click_award_since":"1","zs_click_award_system":"ios","zs_click_award_time":1,"zs_finish_city":1,"zs_finish_jump":0,"zs_finish_time":1,"zs_full_screen_city":1,"zs_full_screen_jump":0,"zs_full_screen_time":1,"zs_history_list_city":1,"zs_history_list_jump":0,"zs_jump_switch":"1","zs_revive_click_num":0,"zs_revive_share_num":0,"zs_revive_video_num":-1,"zs_slide_jump_switch":"1","zs_start_video_city":0,"zs_start_video_switch":0,"zs_switch":0,"zs_version":"1.0","zs_video_adunit":"","zs_skin_push_switch1":"1","zs_skin_push_switch2":"1","zs_game_banner_show_switch":5}',
                this.adcfgjson = '{"more":[],"promotion":[],"indexFloat":[],"banner":[],"indexLeft":[],"gameFloat":[],"endPage":[],"indexLeftFloat":[],"backAd":[],"iosLinkAd":[]}',
                this.loadCfg = JSON.parse(this.loadcfgjson), this.loadCfg.zs_banner_show_number = JSON.parse(this.loadCfg.zs_banner_show_number),
                this.AdCfg = JSON.parse(this.adcfgjson);
        }
        static get Instante() {
            return null == this._instante && (this._instante = new m()), this._instante;
        }
        GetPromotionIndex(e) {
            for (let t = 0; t < this.AdCfg.promotion.length; t++) {
                if (this.AdCfg.promotion[t].appid == e.appid) return t;
            }
            return 0;
        }
        GetPromotion(e) {
            let n = t.LocalStorage.GetObjItemSameDay("Promotion", {}),
                a = [],
                i = 1e5;
            for (let e = 0; e < this.AdCfg.promotion.length; e++) {
                const t = this.AdCfg.promotion[e];
                t.appid in n ? (a.push({
                    num: n[t.appid],
                    adobj: t
                }), n[t.appid] < i && (i = n[t.appid])) : (a.push({
                    num: 0,
                    adobj: t
                }), i = 0);
            }
            let o = a[e];
            return a.sort((e, t) => e.num - t.num), o.num <= i ? (n[o.adobj.appid] = o.num + 1,
                t.LocalStorage.SetObjItemSameDay("Promotion", n), o.adobj) : (n[a[0].adobj.appid] = a[0].num + 1,
                t.LocalStorage.SetObjItemSameDay("Promotion", n), a[0].adobj);
        }
        getLastCanWuchu() {
            let e = !1;
            if (console.log("pxl getLastCan value:" + m.Instante.loadCfg.zs_click_award_num + ";type:" + typeof JSON.parse(m.Instante.loadCfg.zs_click_award_num)),
                "-1" == m.Instante.loadCfg.zs_click_award_num) e = !0;
            else if ("number" != typeof JSON.parse(m.Instante.loadCfg.zs_click_award_num)) try {
                let t = JSON.parse(m.Instante.loadCfg.zs_click_award_num);
                for (let n = 0; n < t.length; n++) {
                    if (t[n] == d.Instate.CurLevel) {
                        e = !0;
                        break;
                    }
                }
            } catch (e) {} else Number(m.Instante.loadCfg.zs_click_award_num) > 0 && d.Instate.todayWuchuTimes < Number(m.Instante.loadCfg.zs_click_award_num) && (e = !0);
            return e;
        }
    }
    m._instante = null;
    class w {
        constructor() {
            this.shareTitle = "", this.shareImgUrl = "h",
                this.bannerAd = [], this.openid = "", this.VERSION = "1", this.APPID = "",
                this.CHANNEL = "", this.PKGNAME = "", this.VIDEO_ID = [""],
                this.BANNER_ID = [""],
                this.ISDEBUG = !1, this.showNum = [0, 0, 0, 0], this.isVideoOpen = !0;
        }
        a() {
            let e = 0,
                t = 0;
            e + t > 0 && (e = 2, t = 3, this.b());
        }
        b() {
            this.c();
        }
        c() {
            this.d();
        }
        d() {}
        static getInstance() {
            return null == this.instance && (this.instance = new w()), this.instance;
        }
        init() {
            this.ISDEBUG || (console.log = (() => {}), console.error = (() => {}));
            let e = Laya.Browser.window.wx,
                t = this;
            this.sysInfo = e.getSystemInfoSync();
            this.sysInfo.screenWidth, this.sysInfo.screenHeight;
            e.updateShareMenu({
                withShareTicket: !0
            }), e.showShareMenu(), e.onShareAppMessage(function() {
                return {
                    title: t.shareTitle,
                    query: "key1=界面的三个点启动1",
                    imageUrl: t.shareImgUrl,
                    success: function() {
                        console.log("分享成功");
                    }
                };
            }), zs.sdk.login(e => {
                console.log("pxl 指色登陆返回数据", e), t.openid = e, console.log("Openid", t.openid), zs.sdk.init(t.openid);
            }, e => {
                console.log("pxl 指色登陆失败", e);
            }), zs.sdk.loadAd(e => {
                console.log("pxl 指色的loadad", e), m.Instante.AdCfg = e;
            }), zs.sdk.loadCfg(e => {
                try {
                    m.Instante.loadCfg = e, console.log("pxl res2", e), "1.0" != e.zs_version && (console.log("pxl zs_version !=1"),
                            m.Instante.loadCfg.zs_banner_city = 0, m.Instante.loadCfg.zs_banner_vertical_enable = 0),
                        0 == m.Instante.loadCfg.zs_switch && (console.log("pxl zs_switch =0"), m.Instante.loadCfg.zs_banner_city = 0,
                            m.Instante.loadCfg.zs_banner_vertical_enable = 0, m.Instante.loadCfg.zs_auto_pop_ups_switch = "0");
                } catch (e) {
                    console.log("pxl 错误"), m.Instante.loadCfg.zs_banner_city = 0, m.Instante.loadCfg.zs_banner_vertical_enable = 0,
                        m.Instante.loadCfg.zs_auto_pop_ups_switch = "0";
                }
            }, () => {
                console.log("pxl loadCfg 失败"), m.Instante.loadCfg.zs_banner_vertical_enable = 0,
                    m.Instante.loadCfg.zs_start_video_switch = 0, m.Instante.loadCfg.zs_auto_pop_ups_switch = "0";
            }), this.preloadAllBanner();
        }
        login() {
            let e = this;
            if (Laya.Browser.onMiniGame) {
                Laya.Browser.window.wx.login({
                    success(t) {
                        console.log("登录成功", t), t.code && (e.openid = t.code.toString());
                    }
                });
            }
        }
        isIphone() {
            return -1 != this.sysInfo.system.indexOf("iOS");
        }
        share() {
            (Laya.Browser.onQQMiniGame ? Laya.Browser.window.wx : wx).shareAppMessage({
                title: this.shareTitle,
                imageUrl: this.shareImgUrl,
                query: ""
            });
        }
        getOpenId() {
            return this.openid;
        }
        getPkgName() {
            return this.PKGNAME;
        }
        getAppID() {
            return this.APPID;
        }
        getVersion() {
            return this.VERSION;
        }
        getChannel() {
            return this.CHANNEL;
        }
        preloadAllBanner() {
            if (this.bannerAd.length > 0)
                for (let e = 0; e < this.bannerAd.length; e++) this.bannerAd[e] && this.bannerAd[e].destroy();
            var e = this,
                t = wx;
            console.log("wx preloadAllBanner");
            let n = t.getSystemInfoSync();
            n.windowWidth, n.windowHeight;
            var a = wx.getSystemInfoSync(),
                i = a.screenWidth / 2,
                o = a.screenHeight;
            for (let t = 0; t < this.BANNER_ID.length; t++) {
                let n = window.wx.createBannerAd({
                    adUnitId: e.BANNER_ID[t],
                    adIntervals: 30,
                    style: {
                        left: 0,
                        top: 0,
                        width: 350
                    }
                });
                e.bannerAd[t] = n;
                let a = -.1;
                2 == t && (a = o / 1334 * 185), n.onResize(function() {
                    e.bannerAd[t].style.left = i - e.bannerAd[t].style.realWidth / 2 + .1, e.bannerAd[t].style.top = o - e.bannerAd[t].style.realHeight - a;
                }), n.onLoad(function() {
                    console.log("banner", t + "加载完成");
                }), n.onError(e => {
                    console.log("banner", t, "加载失败", e);
                });
            }
        }
        showBanner(e) {}
        preloadBanner(e) {
            this.bannerAd[e] && this.bannerAd[e].destroy();
            var t = this,
                n = wx;
            console.log("pxl wx preloadBanner");
            let a = n.getSystemInfoSync();
            a.windowWidth, a.windowHeight;
            var i = wx.getSystemInfoSync(),
                o = i.screenWidth / 2,
                s = i.screenHeight;
            let l = window.wx.createBannerAd({
                adUnitId: t.BANNER_ID[e],
                adIntervals: 30,
                style: {
                    left: 0,
                    top: 0,
                    width: 350
                }
            });
            t.bannerAd[e] = l;
            let r = -.1;
            2 == e && (r = s / 1334 * 185), l.onResize(function() {
                t.bannerAd[e].style.left = o - t.bannerAd[e].style.realWidth / 2 + .1, t.bannerAd[e].style.top = s - t.bannerAd[e].style.realHeight - r;
            }), l.onLoad(function() {
                console.log("pxl banner", e + "加载完成");
            }), l.onError(t => {
                console.log("pxl banner", e, "加载失败", t);
            });
        }
        showBannerNotCreat(e = 0) {
            Laya.Browser.onMiniGame && (console.log("pxl showBannerNotCreat id:" + e), this.bannerAd[e] ? (this.bannerAd[e].show(),
                console.log("pxl 展示banner", e), this.showNum[e]++, console.log("pxl 展示次数", this.showNum[e]),
                console.log(m.Instante.loadCfg.zs_banner_show_number)) : (this.preloadBanner(e),
                console.log("pxl showBannerNotCreat 预加载banner", e), this.showNum[e] = 0));
        }
        hideBanner() {
            let e = this;
            for (let t = 0; t < this.bannerAd.length; t++) this.bannerAd[t] && (this.bannerAd[t].hide(),
                Laya.timer.once(500, e, function() {
                    e.showNum[t] > m.Instante.loadCfg.zs_banner_show_number && (e.preloadBanner(t),
                        console.log("pxl 预加载banner", t), e.showNum[t] = 0);
                }), console.log("隐藏banner", t));
        }
        showVideo(e, t, n) {
            platform.getInstance().showReward(() => {
                t && t();
            }, () => {
                n && n();
            })
        }
        showAppBox() {}
        saveAppToDesktop(e) {
            console.log("saveAppToDesktop"), Laya.Browser.window.wx.saveAppToDesktop({
                success: function() {
                    e && e();
                },
                fail: function() {}
            });
        }
        showDiaLogModel(e) {}
    }
    w.instance = null;
    class I {
        constructor() {}
        static getInstance() {
            return null == I.instance && (I.instance = new I()), I.instance;
        }
        get(e, t, n) {
            let a = new Laya.HttpRequest();
            a.http.timeout = 7e3, a.once(Laya.Event.COMPLETE, this, e => {
                n.apply(t, [{
                    state: 200,
                    data: JSON.parse(a.data)
                }]);
            }), a.once(Laya.Event.ERROR, this, e => {
                n.apply(t, [{
                    state: 500,
                    msg: e
                }]);
            }), a.http.ontimeout = function() {
                console.log("http timeout test: timeout"), n.apply(t, [{
                    state: 408,
                    msg: "timeout"
                }]);
            }, a.send(e, null, "get", "text");
        }
        post(e, t, n, a, i) {
            let o = new Laya.HttpRequest();
            o.http.timeout = 7e3, o.once(Laya.Event.COMPLETE, this, e => {
                i.apply(a, [{
                    state: 200,
                    data: JSON.parse(o.data)
                }]);
            }), o.once(Laya.Event.ERROR, this, e => {
                i.apply(a, [{
                    state: 500,
                    msg: e
                }]);
            }), o.http.ontimeout = function() {
                console.log("http timeout test: timeout"), i.apply(a, [{
                    state: 408,
                    msg: "timeout"
                }]);
            }, null == n ? o.send(e, t, "post", "text") : o.send(e, t, "post", "text", ["content-type", n]);
        }
        sortObject(e) {
            return Object.keys(e).sort().reduce(function(t, n) {
                return t[n] = e[n], t;
            }, {});
        }
        b64_hmac_sha1(e, t, n, a) {
            function _f(e, t, n, a) {
                return e < 20 ? t & n | ~t & a : e < 40 ? t ^ n ^ a : e < 60 ? t & n | t & a | n & a : t ^ n ^ a;
            }

            function _k(e) {
                return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514;
            }

            function _s(e, t) {
                var n = (65535 & e) + (65535 & t);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
            }

            function _r(e, t) {
                return e << t | e >>> 32 - t;
            }

            function _c(e, t) {
                e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
                for (var n = [80], a = 1732584193, i = -271733879, o = -1732584194, s = 271733878, l = -1009589776, r = 0; r < e.length; r += 16) {
                    for (var d = a, c = i, h = o, _ = s, p = l, y = 0; y < 80; y++) {
                        n[y] = y < 16 ? e[r + y] : _r(n[y - 3] ^ n[y - 8] ^ n[y - 14] ^ n[y - 16], 1);
                        var g = _s(_s(_r(a, 5), _f(y, i, o, s)), _s(_s(l, n[y]), _k(y)));
                        l = s, s = o, o = _r(i, 30), i = a, a = g;
                    }
                    a = _s(a, d), i = _s(i, c), o = _s(o, h), s = _s(s, _), l = _s(l, p);
                }
                return [a, i, o, s, l];
            }

            function _b(e) {
                for (var t = [], n = (1 << a) - 1, i = 0; i < e.length * a; i += a) t[i >> 5] |= (e.charCodeAt(i / 8) & n) << 32 - a - i % 32;
                return t;
            }
            return n || (n = "="), a || (a = 8),
                function(e, t) {
                    return function(e) {
                        for (var t = "", a = 0; a < 4 * e.length; a += 3)
                            for (var i = (e[a >> 2] >> 8 * (3 - a % 4) & 255) << 16 | (e[a + 1 >> 2] >> 8 * (3 - (a + 1) % 4) & 255) << 8 | e[a + 2 >> 2] >> 8 * (3 - (a + 2) % 4) & 255, o = 0; o < 4; o++) 8 * a + 6 * o > 32 * e.length ? t += n : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - o) & 63);
                        return t;
                    }(function(e, t) {
                        var n = _b(e);
                        n.length > 16 && (n = _c(n, e.length * a));
                        for (var i = [16], o = [16], s = 0; s < 16; s++) i[s] = 909522486 ^ n[s], o[s] = 1549556828 ^ n[s];
                        var l = _c(i.concat(_b(t)), 512 + t.length * a);
                        return _c(o.concat(l), 672);
                    }(e, t));
                }(e, t);
        }
        objToUrl(e) {
            let t = [];
            for (let n in e) e.hasOwnProperty(n) && t.push(n + "=" + e[n]);
            return t.join("&");
        }
    }
    I.instance = null;
    var f, L = I.getInstance();
    class S {
        static reportEvent(e, t) {
            let n, a, i, o, s, l, r;
            Laya.Browser.onVVMiniGame || Laya.Browser.onQGMiniGame || Laya.Browser.onQQMiniGame || window.wx && (n = w.getInstance().getOpenId(),
                a = w.getInstance().getPkgName(), i = "wx", s = w.getInstance().getAppID(), l = w.getInstance().getVersion(),
                o = w.getInstance().getChannel(), r = s + n);
            var d = {};
            d.appid = s, d.uuid = n, d.pkgname = "", d.platform = i, d.version = l, d.c_ts = new Date().getTime(),
                d.event = e, d.data = JSON.stringify(t), d.channel = o, d.abtest = "A", d.appiduuid = s + n,
                d.data || (d.data = "");
            let c = JSON.stringify(d);
            n && n.length > 1 && ((d = JSON.parse(c)).appid = s, d.uuid = n, d.appiduuid = s + n,
                this.SendData(d, "lechangshanghai2052A"));
        }
        static SendData(e, t) {
            // var n = L.sortObject(e), a = L.b64_hmac_sha1(t, L.objToUrl(n), !1, !1);
            // let i = "https://miniapp.kkyouxi.cn/player/quick_game_report/?" + L.objToUrl(n) + "&signature=" + a;
            // console.log("reportEvent:", e.event, e), console.log("url:", i), L.get(i, this, function(t) {
            //     200 == t.state ? console.log("======request success======" + e.event) : console.log("======request fail======>" + e.event, t.msg);
            // });
        }
    }
    class b {
        static reportEvent(e, t) {
            window.wx || Laya.Browser.onVVMiniGame || Laya.Browser.onQGMiniGame;
        }
        static reportLevelEvent(e, t) {
            window.wx && ("begin" == e ? window.wx.aldStage.onStart({
                stageId: t,
                stageName: t + ""
            }) : "end" == e ? window.wx.aldStage.onEnd({
                stageId: t,
                stageName: t + "",
                event: "complete",
                params: {
                    desc: "关卡完成"
                }
            }) : "end1" == e && window.wx.aldStage.onEnd({
                stageId: t,
                stageName: t + "",
                event: "fail",
                params: {
                    desc: "关卡失败"
                }
            }));
        }
        static reportEventWXGame(e, t) {
            window.wx && (S.reportEvent("game_wx_exported", ""), S.reportEvent("game_" + t, ""));
        }
    }
    b.reportEventStr = [], b.openID = "";
    class C extends c {
        constructor() {
            super(...arguments), this.Player = null, this.MainNode = null, this.hitResultfront = [],
                this.MovingSpeed = 0, this.ziNode = null, this.playerYan = null, this.playerYan1 = null,
                this.playerXian = null, this.isReceive = !1, this.parentNode = null, this.PlayerPosNode = null,
                this.playerscale = 1, this.isRota = !1, this.TouchX = 0, this.lastRotaPos = 1, this.rotaPos = 1,
                this.rightZ = 0, this.curEatingType = "white", this.canRongyanHit = !0, this.candiciHit = !0,
                this.isInvincible = !1, this.eatingTimes = 0, this.curMoveLength = 0, this.theHitTargetY = 0,
                this.theHitTargetZ = 0, this.isInCDTime = !1, this.aniIndexPlayer = -1, this.aniPlayerState = 0,
                this.ycParticle3D = null, this.landSpeed = 0, this.BossFlyAniStage = 0, this.landSpeed1 = 0,
                this.firstPos = new Laya.Vector3();
        }
        onAwake() {
            super.onAwake(), this.MainNode = this.owner.getChildByName("zuo").getChildByName("you").getChildByName("zuo"),
                this.playerMain = this.MainNode.getChildByName("Character_Anim"), this.Player = this.playerMain.getChildByName("Player_1_1"),
                this.playerAni = this.playerMain.getComponent(Laya.Animator), this.turnNodeLeft = this.owner.getChildByName("zuo"),
                this.turnNodeRight = this.turnNodeLeft.getChildByName("you"), this.turnNodeLeft2 = this.turnNodeRight.getChildByName("zuo"),
                this.MainCarmer = this.MainNode.getChildByName("Main Camera"), this.parentNode = this.owner,
                this.MainAni = this.MainCarmer.getChildByName("Main Camera").getComponent(Laya.Animator),
                this.aniAddDel = this.Player.getChildByName("Character").getChildByName("Player_1_1").getChildByName("Bip001").getChildByName("GameObject").getComponent(Laya.Animator),
                this.aniAddDel.speed = 0, this.zianiAddDel = this.MainNode.getChildByName("zi").getChildByName("zi").getComponent(Laya.Animator),
                this.zianiAddDel.speed = 0, this.PlayerPosNode = this.MainNode.getChildByName("PlayerPos"),
                this.playerwudiAni = this.Player.getComponent(Laya.Animator), this.playerwudiAni.speed = 0,
                this.ziNode = this.MainNode.getChildByName("zi"), this.shapePlayer = this.Player.getComponent(Laya.PhysicsCollider).colliderShape.clone(),
                this.Player.getComponent(Laya.PhysicsCollider).destroy(), this.shapePlayerBig = this.Player.getChildByName("Character").getComponent(Laya.PhysicsCollider).colliderShape.clone(),
                this.Player.getChildByName("Character").getComponent(Laya.PhysicsCollider).destroy(),
                this.playerSprite3D = this.Player.getChildByName("Character").getChildByName("Player_1_1").getChildByName("Mode4"),
                this.playerYan = this.playerMain.getChildByName("yan"), this.playerYan1 = this.playerMain.getChildByName("yan1"),
                this.playerXian = this.MainNode.getChildByName("xian"), this.playerAnifh = this.Player.getChildByName("Character").getComponent(Laya.Animator),
                this.ycParticle3D = this.playerMain.getChildByName("yc"), d.Instate.PlayerHeadNode = this.Player.getChildByName("Character").getChildByName("Player_1_1").getChildByName("Bip001").getChildByName("Bip001 Pelvis").getChildByName("Bip001 Spine").getChildByName("Bip001 Spine1").getChildByName("Bip001 Spine2").getChildByName("Bip001 Neck"),
                p.Instate.RegisterOne("load_game_player", new Laya.Handler(this, this.loadPlayerHead)),
                this.loadPlayerHead(), this.playerAnifh.speed = 0, this.initContexts();
        }
        Touch(e) {
            d.Instate.GameState == s.PLAY && (this.TouchX = e.DetaMouseX * Laya.timer.delta * 5e-4);
        }
        onUpdate() {
            if (d.Instate.GameState == s.PLAY)
                if (this.isRota) {
                    let e = .001 * Laya.timer.delta * 90;
                    this.playerMain.transform.localRotationEulerY = 0, 1 == this.lastRotaPos ? 2 == this.rotaPos ? (this.turnNodeRight.transform.localRotationEulerY = this.turnNodeRight.transform.localRotationEulerY - e,
                        this.turnNodeRight.transform.localRotationEulerY <= -90 && (this.turnNodeRight.transform.localRotationEulerY = -90,
                            this.isRota = !1)) : (this.turnNodeLeft.transform.localRotationEulerY = this.turnNodeLeft.transform.localRotationEulerY + e,
                        this.turnNodeLeft.transform.localRotationEulerY >= 90 && (this.turnNodeLeft.transform.localRotationEulerY = 90,
                            this.isRota = !1)) : 2 == this.lastRotaPos ? 1 == this.rotaPos ? (this.turnNodeLeft2.transform.localRotationEulerY = this.turnNodeLeft2.transform.localRotationEulerY + e,
                        this.turnNodeLeft2.transform.localRotationEulerY >= 90 && (this.turnNodeLeft2.transform.localRotationEulerY = 90,
                            this.isRota = !1)) : (this.turnNodeRight.transform.localRotationEulerY = this.turnNodeRight.transform.localRotationEulerY - e,
                        this.turnNodeRight.transform.localRotationEulerY < -180 && (this.turnNodeRight.transform.localRotationEulerY = -180,
                            this.isRota = !1)) : 3 == this.lastRotaPos ? 1 == this.rotaPos ? (this.turnNodeRight.transform.localRotationEulerY = this.turnNodeRight.transform.localRotationEulerY - e,
                        this.turnNodeRight.transform.localRotationEulerY <= -90 && (this.turnNodeRight.transform.localRotationEulerY = -90,
                            this.isRota = !1)) : (this.turnNodeLeft.transform.localRotationEulerY = this.turnNodeLeft.transform.localRotationEulerY + e,
                        this.turnNodeLeft.transform.localRotationEulerY >= 180 && (this.turnNodeLeft.transform.localRotationEulerY = 180,
                            this.isRota = !1)) : 4 == this.lastRotaPos && (2 == this.rotaPos ? (this.turnNodeRight.transform.localRotationEulerY = this.turnNodeRight.transform.localRotationEulerY - e,
                        this.turnNodeRight.transform.localRotationEulerY <= -90 && (this.turnNodeRight.transform.localRotationEulerY = -90,
                            this.isRota = !1)) : (this.turnNodeLeft.transform.localRotationEulerY = this.turnNodeLeft.transform.localRotationEulerY + e,
                        this.turnNodeLeft.transform.localRotationEulerY >= 180 && (this.turnNodeLeft.transform.localRotationEulerY = 180,
                            this.isRota = !1))), this.TouchX = 0;
                } else {
                    let e = .001 * Laya.timer.delta * this.MovingSpeed,
                        t = this.playerMain.transform.position.clone();
                    if (this.curMoveLength += e, 0 != this.TouchX) {
                        let e = 2;
                        if (this.TouchX > 0 ? this.playerMain.transform.localRotationEulerY > 0 ? this.playerMain.transform.localRotationEulerY = -e : this.playerMain.transform.localRotationEulerY - e < -20 ? this.playerMain.transform.localRotationEulerY = -20 : this.playerMain.transform.localRotationEulerY -= e : this.playerMain.transform.localRotationEulerY < 0 ? this.playerMain.transform.localRotationEulerY = e : this.playerMain.transform.localRotationEulerY + e > 20 ? this.playerMain.transform.localRotationEulerY = 20 : this.playerMain.transform.localRotationEulerY += e,
                            this.playerMain.transform.localPositionX - this.TouchX > -2.4) {
                            let e = -2.4 - this.playerMain.transform.localPositionX;
                            this.ziNode.transform.localPositionX -= e, this.playerMain.transform.localPositionX = -2.4;
                        } else if (this.playerMain.transform.localPositionX - this.TouchX < -5) {
                            let e = -5 - this.playerMain.transform.localPositionX;
                            this.ziNode.transform.localPositionX -= e, this.playerMain.transform.localPositionX = -5;
                        } else this.playerMain.transform.localPositionX -= this.TouchX, this.ziNode.transform.localPositionX -= this.TouchX;
                        this.TouchX = 0;
                    } else h.Instate.isDome || (this.playerMain.transform.localRotationEulerY = 0);
                    1 == this.rotaPos ? this.parentNode.transform.localPositionZ = this.parentNode.transform.localPositionZ + e : 2 == this.rotaPos ? this.parentNode.transform.localPositionX = this.parentNode.transform.localPositionX - e : 3 == this.rotaPos ? this.parentNode.transform.localPositionX = this.parentNode.transform.localPositionX + e : 4 == this.rotaPos && (this.parentNode.transform.localPositionZ = this.parentNode.transform.localPositionZ - e);
                    let n = this.playerMain.transform.position.clone();
                    this.collision(t, n);
                }
        }
        collision(e, t) {
            let n = this.shapePlayer;
            if (this.isInvincible && (n = this.shapePlayerBig), d.Instate.MainScene3D.physicsSimulation.shapeCastAll(n, e, t, this.hitResultfront))
                for (let e = 0; e < this.hitResultfront.length; e++) {
                    const t = this.hitResultfront[e];
                    this.collisionTrigger(t);
                }
        }
        collisionTrigger(e) {
            let t = this;
            if (e.collider.owner)
                if (9 == e.collider.owner.layer) this.isRota = !0, 1 == this.rotaPos ? (this.lastRotaPos = this.rotaPos,
                    "wan_you" == e.collider.owner.parent.name ? this.rotaPos = 2 : "wan_zuo" == e.collider.owner.parent.name && (this.rotaPos = 3),
                    this.rightZ = e.collider.owner.transform.position.z - .59, this.parentNode.transform.localPositionZ = this.rightZ) : 3 == this.rotaPos ? (this.lastRotaPos = this.rotaPos,
                    "wan_you" == e.collider.owner.parent.name ? this.rotaPos = 1 : this.rotaPos = 4,
                    this.rightZ = e.collider.owner.transform.position.x - .59 - 3.64, this.parentNode.transform.localPositionX = this.rightZ) : 2 == this.rotaPos ? (this.lastRotaPos = this.rotaPos,
                    "wan_you" == e.collider.owner.parent.name ? this.rotaPos = 4 : this.rotaPos = 1,
                    this.rightZ = e.collider.owner.transform.position.x + .59 + 3.64, this.parentNode.transform.localPositionX = this.rightZ) : 4 == this.rotaPos && (this.lastRotaPos = this.rotaPos,
                    "wan_you" == e.collider.owner.parent.name ? this.rotaPos = 3 : this.rotaPos = 2,
                    this.rightZ = e.collider.owner.transform.position.x - .59, this.parentNode.transform.localPositionZ = this.rightZ);
                else if (10 == e.collider.owner.layer) {
                let t = e.collider.owner.parent.name;
                this.isInvincible || this.curEatingType != t && (Laya.Browser.onMiniGame && Laya.Browser.window.wx.vibrateShort(),
                    this.changePlayerColor(t), p.Instate.Distribute("playSound", "CHANGECOLOR"));
            } else if (11 == e.collider.owner.layer) {
                let t = e.collider.owner.parent.parent.name,
                    n = e.collider.owner.parent.parent.getChildByName("Particle System");
                if (this.isInvincible) {
                    this.showPlayerAniChange(1), this.playerscale += _.onceAdd;
                    let t = e.collider.owner,
                        n = e.collider.owner.parent.parent;
                    t.getComponent(Laya.PhysicsCollider).destroy();
                    let a = this.playerMain.transform.position.clone(),
                        i = n.transform.position.clone();
                    new u(n, .2, new Laya.Vector3(a.x, a.y, a.z + 2.4), new Laya.Vector3(i.x, i.y, i.z), new Laya.Vector3(0, 0, 0), new Laya.Vector3(n.transform.localScaleX, n.transform.localScaleY, n.transform.localScaleZ)),
                        Laya.timer.once(210, this, function() {
                            n.active = !1;
                        });
                } else n && n.particleSystem.play(), -1 != t.indexOf(this.curEatingType) ? (this.showPlayerAniChange(1),
                        1 == d.Instate.CurLevel ? this.playerscale += _.onceAddFirst : this.playerscale += _.onceAdd) : this.isReceive || (this.showPlayerAniChange(2),
                        1 == d.Instate.CurLevel ? this.playerscale -= _.onceDelFirst : this.playerscale -= _.onceDel),
                    e.collider.owner.active = !1;
                this.changePlayerSize();
            } else if (12 == e.collider.owner.layer) this.isInvincible || this.isReceive || (p.Instate.Distribute("playSound", "Hited"),
                this.playerYan.particleSystem.stop(), d.Instate.GameState = s.DEATH, Laya.Browser.onMiniGame && Laya.Browser.window.wx.vibrateShort(),
                this.playerAni.play("Knocked Out", 0, 0), this.playerMain.transform.localRotationEulerY = 0,
                GetInstate(h).Clear(), p.Instate.Distribute("main_ui_bannerClean", ""), Laya.timer.once(500, this, function() {
                    Laya.timer.clearAll(t), b.reportEvent("lv" + d.Instate.CurLevel + "_lose_game_show", ""),
                        m.Instante.type = "1", Laya.Scene.open("Views/SettlementView.scene", true, !1);
                }));
            else if (13 == e.collider.owner.layer) !this.canRongyanHit || this.isInvincible || this.isReceive || (p.Instate.Distribute("playSound", "RONGYAN"),
                this.canRongyanHit = !1, Laya.timer.once(50, this, function() {
                    t.canRongyanHit = !0;
                }), this.showPlayerAniChange(2), this.playerscale -= _.onceDel, this.changePlayerSize());
            else if (14 == e.collider.owner.layer) !this.candiciHit || this.isInvincible || this.isReceive || (p.Instate.Distribute("playSound", "DICI"),
                this.candiciHit = !1, Laya.timer.once(100, this, function() {
                    t.candiciHit = !0;
                }), this.showPlayerAniChange(2), this.playerscale -= _.onceDel, this.changePlayerSize());
            else if (15 == e.collider.owner.layer) this.isInvincible = !1,
                d.Instate.GameState = s.FINISH, new g(this.playerMain, 1, new Laya.Vector3(-3.64, this.playerMain.transform.localPositionY, this.playerMain.transform.localPositionZ + 4), new Laya.Vector3(this.playerMain.transform.localPositionX, this.playerMain.transform.localPositionY, this.playerMain.transform.localPositionZ), !1, null),
                new g(this.MainCarmer, 1, new Laya.Vector3(-3.64, this.MainCarmer.transform.localPositionY, this.MainCarmer.transform.localPositionZ + 4), new Laya.Vector3(this.MainCarmer.transform.localPositionX, this.MainCarmer.transform.localPositionY, this.MainCarmer.transform.localPositionZ), !1, null),
                Laya.timer.once(1200, this, function() {
                    t.playerYan.particleSystem.stop(), t.playerAni.play("tiao", 0, 0), d.Instate.isStartKuangdian = !0,
                        p.Instate.Distribute("main_ui_end_root", !0), p.Instate.Distribute("main_ui_progress_start", !0),
                        Laya.timer.once(4e3, t, function() {
                            p.Instate.Distribute("main_ui_end_root", !1), p.Instate.Distribute("main_ui_progress_start", !1),
                                t.playerAni.play("fei", 0, 0), t.landSpeed1 = 18, Laya.timer.frameLoop(1, t, t.doManFlyAni),
                                console.log("pxl mengdianjindu 111:", d.Instate.mengdianjindu), p.Instate.Distribute("playSound", "JUMP");
                            let e = this.playerscale / _.maxScale * d.Instate.mengdianjindu,
                                n = Math.ceil(50 * e);
                            n > 50 && (n = 50), t.landSpeed = 8 + 1.14 * n, console.log("pxl landSpeed 111:", t.landSpeed),
                                Laya.timer.once(1200, t, function() {
                                    d.Instate.js.getChildByName("Blob").getComponent(Laya.Animator).speed = 1, Laya.timer.once(200, t, function() {
                                        t.themanHit.getChildByName("Character_Anim").getComponent(Laya.Animator).play("js_fei", 0, 0),
                                            d.Instate.js.getChildByName("personMain").getChildByName("Character_Anim").getChildByName("Player_1_1").getChildByName("Character").getComponent(Laya.Animator).play("xz", 0, 0),
                                            d.Instate.js.getChildByName("personMain").getChildByName("Character_Anim").getChildByName("xing").particleSystem.play(),
                                            p.Instate.Distribute("playSound", "FLY"), Laya.timer.frameLoop(1, t, t.doHitManFlyAni);
                                    });
                                });
                        });
                });
            else if (16 == e.collider.owner.layer) e.collider.owner.active = !1, p.Instate.Distribute("playSound", "STAR"),
                Laya.Browser.onMiniGame && Laya.Browser.window.wx.vibrateShort(), this.isInvincible = !0,
                this.playerAni.play("sprinting", 0, 0), this.MovingSpeed = _.MovingSpeedQuick, this.playerXian.particleSystem.play(),
                this.playerYan1.particleSystem.play(), this.playerwudiAni.play("wudi1", 0, 0), this.playerwudiAni.speed = 1,
                Laya.timer.once(1e3 * _.InvincibleTime, this, function() {
                    this.playerXian.particleSystem.stop(), this.playerYan1.particleSystem.stop(), this.playerwudiAni.play("wudi2", 0, 0),
                        this.playerwudiAni.speed = 1, t.isInvincible = !1, t.playerAni.play("running", 0, 0),
                        t.MovingSpeed = _.MovingSpeed;
                });
            else if (17 == e.collider.owner.layer) {
                let t = e.collider.owner,
                    n = this.playerMain.transform.position.clone(),
                    a = t.transform.position.clone(),
                    i = t.parent;
                t.getComponent(Laya.PhysicsCollider).destroy(), this.GoldAdd(), this.isInvincible ? (new u(i, .2, new Laya.Vector3(n.x, a.y, n.z + 2.4), new Laya.Vector3(a.x, a.y, a.z), new Laya.Vector3(0, 0, 0), new Laya.Vector3(i.transform.localScaleX, i.transform.localScaleY, i.transform.localScaleZ)),
                    Laya.timer.once(210, this, function() {
                        i.active = !1;
                    })) : (new u(i, .4, new Laya.Vector3(a.x, a.y + 4, a.z), new Laya.Vector3(a.x, a.y, a.z), new Laya.Vector3(i.transform.localScaleX, i.transform.localScaleY, i.transform.localScaleZ), new Laya.Vector3(i.transform.localScaleX, i.transform.localScaleY, i.transform.localScaleZ)),
                    Laya.timer.once(400, this, function() {
                        i.active = !1;
                    }));
            } else if (18 == e.collider.owner.layer) e.collider.owner.active = !1;
            else {
                if (19 == e.collider.owner.layer) {
                    return d.Instate.levelDouble = Number(e.collider.owner.name), 10 * d.Instate.levelDouble - 10;
                }
                if (20 == e.collider.owner.layer) {
                    let t = e.collider.owner;
                    t.getComponent(Laya.PhysicsCollider).destroy(), t.getChildByName("Glass").active = !1;
                    for (let e = 0; e < 6; e++) {
                        let n = "caidai";
                        0 != e && (n += e), t.getChildByName(n).particleSystem.play();
                    }
                }
            }
        }
        initContexts() {
            this.turnNodeRight.transform.localRotationEulerY = 0, this.turnNodeLeft.transform.localRotationEulerY = 0,
                this.turnNodeLeft2.transform.localRotationEulerY = 0, this.parentNode.transform.localPositionZ = 0,
                this.parentNode.transform.localPositionX = 0, this.parentNode.transform.localPositionY = 0,
                this.playerMain.transform.localPositionX = -3.64, this.playerMain.transform.localPositionY = 0,
                this.playerMain.transform.localPositionZ = -.5, this.MainCarmer.transform.localPositionX = -3.64,
                this.MainCarmer.transform.localPositionY = 0, this.MainCarmer.transform.localPositionZ = 0,
                this.MainCarmer.transform.localRotationEulerY = 0, this.ziNode.transform.localPositionX = -3.64,
                this.ziNode.transform.localPositionY = 0, this.ziNode.transform.localPositionZ = 0,
                this.playerMain.transform.localRotationEulerY = 0, this.curMoveLength = 0, this.isRota = !1,
                this.TouchX = 0, this.lastRotaPos = 1, this.rotaPos = 1, this.isInCDTime = !1, this.landSpeed = 0,
                this.landSpeed1 = 0, this.BossFlyAniStage = 0, this.isReceive = !1, this.PlayerPosNode.transform.localPositionZ = -.8,
                d.Instate.isRewardStep ? this.playerscale = 2 : this.playerscale = 1, this.changePlayerSize(),
                this.MovingSpeed = _.MovingSpeed, this.playerAni.play("Idle", 0, 0), this.playerAni.speed = 1,
                this.isInvincible = !1, this.changePlayerColor("white");
        }
        Reset() {
            d.Instate.GameState = s.READY, this.MainAni.play("main2", 0, 0), this.initContexts();
        }
        touchRegister() {
            d.Instate.GameState != s.PLAY && (b.reportLevelEvent("begin", d.Instate.CurLevel),
                GetInstate(h).Register(new Laya.Handler(this, this.Touch)), this.MainAni.play("main1", 0, 0),
                d.Instate.GameState = s.PLAY, this.MovingSpeed = _.MovingSpeed, this.playerAni.play("running"),
                this.playerYan.particleSystem.play(), b.reportEvent("start_lv" + d.Instate.CurLevel, ""),
                this.themanHit = d.Instate.js.getChildByName("personMain"));
        }
        doReceive() {
            let e = this;
            this.isReceive = !0, d.Instate.GameState == s.FINISH ? (this.isInCDTime = !1, d.Instate.isStartKuangdian = !0,
                p.Instate.Distribute("main_ui_end_root", !0)) : (this.playerAni.play("Idle", 0, 0),
                this.playerAnifh.play("fuhuo", 0, 0), this.playerAnifh.speed = 1, Laya.timer.once(1e3, this, function() {
                    d.Instate.GameState = s.PLAY, e.playerYan.particleSystem.play(), e.playerAni.play("running", 0, 0);
                }), Laya.timer.once(3e3, this, function() {
                    this.playerAnifh.play("fuhuo1", 0, 0), this.playerAnifh.speed = 1, e.isReceive = !1;
                }));
        }
        receiveFunction() {
            p.Instate.Distribute("main_ui_button_root", !1), GetInstate(h).Register(new Laya.Handler(this, this.Touch)),
                this.doReceive();
        }
        loadPlayerHead(e = _.DefaultPayerSKin) {
            if (d.Instate.PlayerHeadNode)
                for (let t = 0; t < d.Instate.PlayerHeadNode.numChildren; t++) {
                    let n = d.Instate.PlayerHeadNode.getChildAt(t);
                    n && (n.name == e ? n.active = !0 : "Bip001 Head" == n.name ? n.active = !0 : n.active = !1);
                }
        }
        GoldAdd() {
            Laya.Browser.onMiniGame && Laya.Browser.window.wx.vibrateShort(), p.Instate.Distribute("playSound", "GOLD"),
                d.Instate.level_currency += Math.floor(_.oneGoldAdd * d.Instate.curGoldMult), d.Instate.currency += Math.floor(_.oneGoldAdd * d.Instate.curGoldMult),
                t.LocalStorage.SetIntItem("currency_localstorage", d.Instate.currency), p.Instate.Distribute("main_ui_currency_update", d.Instate.currency);
        }
        changePlayerSize() {
            this.playerscale <= _.minScale ? this.playerscale = _.minScale : this.playerscale >= _.maxScale && (this.playerscale = _.maxScale),
                this.playerMain.transform.localScaleX = this.playerscale, this.playerMain.transform.localScaleY = this.playerscale,
                this.playerMain.transform.localScaleZ = this.playerscale, this.ziNode.transform.localPositionY = .8 * (this.playerscale - 1);
        }
        showSuccessView() {
            d.Instate.CurLevel = d.Instate.CurLevel + 1, t.LocalStorage.SetIntItem("CurLevel", d.Instate.CurLevel),
                d.Instate.GameState = s.END;
            let e = this;
            GetInstate(h).Clear(), p.Instate.Distribute("main_ui_bannerClean", ""), Laya.timer.once(1500, this, function() {
                Laya.timer.clearAll(e), m.Instante.type = "1", Laya.Scene.open("Views/SettlementView.scene", true, !0);
            });
        }
        changePlayerColor(e) {
            let t = this;
            if (this.curEatingType == e) return;
            this.curEatingType = e, console.log("pxl changePlayerColor color:", e);
            let n = "res/3DScene/MianScene3d/Conventional/Assets/layashader/player_" + this.curEatingType + ".lmat";
            "white" == this.curEatingType && (n = "res/3DScene/MianScene3d/Conventional/Assets/layashader/player.lmat"),
                Laya.Material.load(n, Laya.Handler.create(this, function(e) {
                    console.log("pxl changePlayerColor change 111"), t.playerSprite3D.skinnedMeshRenderer.material = e;
                }));
        }
        showPlayerAniChange(e) {
            Laya.Browser.onMiniGame && Laya.Browser.window.wx.vibrateShort(), 1 == e ? (p.Instate.Distribute("playSound", "Eat"),
                this.aniAddDel.play("shanshuo", 0, 0), this.aniAddDel.speed = 1, this.zianiAddDel.play("zi", 0, 0),
                this.zianiAddDel.speed = 1) : (p.Instate.Distribute("playSound", "EatNO"), this.aniAddDel.play("shanshuo 1", 0, 0),
                this.aniAddDel.speed = 1, this.zianiAddDel.play("zi1", 0, 0), this.zianiAddDel.speed = 1);
        }
        doManFlyAni() {
            let e = -18;
            this.landSpeed1 < 0 && (e = -180), this.landSpeed1 += .001 * Laya.timer.delta * e;
            let t = this.landSpeed1 * Laya.timer.delta * .001,
                n = .001 * Laya.timer.delta * 5;
            this.playerMain.transform.localPositionZ += n;
            let a = -.5 * this.playerscale;
            this.landSpeed1 < 0 && this.playerMain.transform.localPositionY + t <= a ? (this.playerMain.transform.localPositionY = a,
                    Laya.timer.clear(this, this.doManFlyAni)) : this.playerMain.transform.localPositionY += t,
                this.MainCarmer.transform.localPositionZ += n, this.MainCarmer.transform.localPositionY += t;
        }
        doHitManFlyAni() {
            let e = -16;
            this.landSpeed < 0 && (e = -16), this.landSpeed += .001 * Laya.timer.delta * e;
            let t = this.landSpeed * Laya.timer.delta * .001,
                n = .001 * Laya.timer.delta * 12.4,
                a = -1;
            if (this.themanHit.transform.localPositionZ + n > 96) console.log("pxl localPositionZ > 95 000"),
                this.themanHit.transform.localPositionZ = 96, a = 50;
            else if (this.landSpeed < 0 && this.themanHit.transform.localPositionZ + n >= 21) {
                let e = Math.floor((this.themanHit.transform.localPositionZ + n - 21) / 1.5);
                e > 50 && (e = 50);
                let i = .5 + 1.5 * e;
                this.themanHit.transform.localPositionY + t <= i && (a = e);
            }
            if (-1 != a) {
                let e = .2 + 1.5 * a,
                    i = 21 + 1.5 * a;
                50 == a && (e = 74.5, i = 96);
                let o = function() {
                    let e = d.Instate.js.getChildByName("personMain").getChildByName("Character_Anim");
                    e.getChildByName("Player_1_1").getChildByName("Character").getComponent(Laya.Animator).speed = 0;
                    let t = e.getChildByName("lihua"),
                        n = e.getChildByName("lihua (1)");
                    t.particleSystem.play(), n.particleSystem.play(), e.getChildByName("xing").particleSystem.stop();
                    let a = d.Instate.levelDouble.toFixed(1) + "";
                    if (console.log("pxl name 000:", a), "6.0" != a) {
                        p.Instate.Distribute("playSound", "GROUND");
                        let e = d.Instate.js.getChildByName("bs").getChildByName(a).getComponent(Laya.Animator);
                        e && e.play("box 2", 0, 0);
                    } else p.Instate.Distribute("playSound", "ARRIVEDTOP"), d.Instate.levelDouble = 10;
                };
                if (this.themanHit.transform.localPositionY + t <= e) return this.themanHit.transform.localPositionY = e,
                    void(this.themanHit.transform.localPositionZ + n >= i ? (this.themanHit.transform.localPositionZ = i,
                        d.Instate.levelDouble = Number(a / 10 + 1), console.log("pxl localPositionZ 000:", this.themanHit.transform.localPositionZ),
                        console.log("pxl localPositionY 000:", this.themanHit.transform.localPositionY),
                        console.log("pxl levelDouble:", d.Instate.levelDouble), o(), Laya.timer.clear(this, this.doHitManFlyAni),
                        this.showSuccessView()) : (this.MainCarmer.transform.localPositionZ += n, this.themanHit.transform.localPositionZ += n));
                this.themanHit.transform.localPositionZ + n >= i && (this.themanHit.transform.localPositionZ = i,
                    this.themanHit.transform.localPositionY + t <= e ? (this.themanHit.transform.localPositionY = e,
                        d.Instate.levelDouble = Number(a / 10 + 1), console.log("pxl localPositionZ 111:", this.themanHit.transform.localPositionZ),
                        console.log("pxl localPositionY 111:", this.themanHit.transform.localPositionY),
                        console.log("pxl levelDouble:", d.Instate.levelDouble), o(), Laya.timer.clear(this, this.doHitManFlyAni),
                        this.showSuccessView()) : (this.themanHit.transform.localPositionY += t, this.MainCarmer.transform.localPositionY += t));
            } else this.MainCarmer.transform.localPositionY += t, this.MainCarmer.transform.localPositionZ += n,
                this.themanHit.transform.localPositionY += t, this.themanHit.transform.localPositionZ += n;
        }
        upGradeTime() {
            p.Instate.Distribute("playSound", "UPGrade"), this.ycParticle3D.particleSystem.play();
        }
    }
    class v {
        constructor() {
            this.dic = {}, this.IsComplete = {}, this.isover = !1, p.Instate.Register("PlayBG", Laya.Handler.create(this, this.PlayBG)),
                p.Instate.Register("playSound", Laya.Handler.create(this, this.Play)), p.Instate.Register("playSoundCall", Laya.Handler.create(this, this.PlayCall)),
                p.Instate.Register("StopCall", Laya.Handler.create(this, this.StopCall)), Laya.Browser.onMiniGame && wx.onShow(() => {
                    d.Instate.isStartKuangdian && w.getInstance().hideBanner() //, p.Instate.Distribute("PlayBG", "BG");
                });
        }
        static get Instate() {
            return null == v._instate && (v._instate = new v()), v._instate;
        }
        Load(e) {
            this.dic = e;
            let t = [];
            for (let e in this.dic) t.push(this.dic[e]), this.IsComplete[e] = !0;
            let n = this;
            Laya.loader.create(t, Laya.Handler.create(null, e => {
                n.isover = e //, p.Instate.Distribute("PlayBG", "BG");
            }), Laya.Handler.create(null, e => {}));
        }
        Play(e) {
            this.isover && e in this.dic && Laya.SoundManager.playSound(this.dic[e]);
        }
        PlayCall(e) {
            this.isover && e in this.dic && this.IsComplete[e] && (this.IsComplete[e] = !1,
                Laya.SoundManager.playSound(this.dic[e], 1, Laya.Handler.create(null, t => {
                    v.Instate.IsComplete[e] = !0;
                })));
        }
        StopCall(e) {
            this.isover && e in this.dic && 0 == this.IsComplete[e] && (this.IsComplete[e] = !1,
                Laya.SoundManager.stopSound(this.dic[e]), v.Instate.IsComplete[e] = !0);
        }
        PlayBG(e) {
            this.isover && e in this.dic && (console.log("pxl Laya.loader music PlayBG"), Laya.SoundManager.playMusic(this.dic[e], 0));
        }
    }
    v._instate = null;
    class x {
        static Subcontract(e, t, n, a) {
            if (window.tt) n();
            else if (Laya.Browser.onQQMiniGame) {
                window.qq.loadSubpackage({
                    name: e,
                    success(e) {
                        t(1), n(e);
                    },
                    fail(e) {
                        a && a();
                    }
                }).onProgressUpdate(e => {
                    t(.01 * e.progress);
                });
            } else if (Laya.Browser.onMiniGame) {
                window.wx.loadSubpackage({
                    name: e,
                    success(e) {
                        t(1), n(e);
                    },
                    fail(e) {
                        a && a();
                    }
                }).onProgressUpdate(e => {
                    t(.01 * e.progress);
                });
            } else if (Laya.Browser.onVVMiniGame) n();
            else if (Laya.Browser.onBDMiniGame) {
                window.swan.loadSubpackage({
                    name: e,
                    success(e) {
                        t(1), n(e);
                    },
                    fail(e) {
                        a && a();
                    }
                }).onProgressUpdate(e => {
                    t(.01 * e.progress);
                });
            } else Laya.Browser.onPC, n();
        }
    }
    class A {}
    A.lvConfigSub = [
            [
                [
                    ["cj2", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["cj1", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["cj4", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["quan", -4.5, -1.7, 36, 0, 0, 0, 1, 1, 1],
                    ["quan", 7, -1.7, 150, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["green", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 31, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["yellow", 0, 0, 43.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 64, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 61, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 61, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 64, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["red", 0, 0, 73.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 89, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 92, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 95, 0, 0, 0, 1, 1, 1],
                    ["coin", 1, .5, 100, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 100, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 100, 0, 0, 0, 1, 1, 1],
                    ["coin", .35, .5, 103, 0, 0, 0, 1, 1, 1],
                    ["coin", -.35, .5, 103, 0, 0, 0, 1, 1, 1],
                    ["coin", 1, .5, 106, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 106, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 106, 0, 0, 0, 1, 1, 1],
                    ["coin", .35, .5, 109, 0, 0, 0, 1, 1, 1],
                    ["coin", -.35, .5, 109, 0, 0, 0, 1, 1, 1],
                    ["coin", 1, .5, 112, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 112, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 112, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj2", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["cj5", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["cj3", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["cj6", 0, 0, 127, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 127, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 142, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 157, 0, 0, 0, 1, 1, 1],
                    ["Boat_01", -6.47, 0, 80.7, 0, 0, 0, 1, 1, 1],
                    ["Boat_02", 7.95, 0, 190, 0, 44.99999361401253, 0, 1, 1, 1],
                    ["quan", -5, -1.7, 36, 0, 0, 0, 1, 1, 1],
                    ["quan", -5, -1.7, 126, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["yellow", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.7, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.7, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.7, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.7, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 31, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.7, 0, 31, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.7, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["red", 0, 0, 43.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.2, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .8, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.2, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .8, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.2, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .8, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.2, 0, 63, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .8, 0, 63, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.2, 0, 66, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .8, 0, 66, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.2, 0, 60, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .8, 0, 60, 0, 0, 0, 1, 1, 1],
                    ["yellow", 0, 0, 73.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 91, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 91, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 94, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 107, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 102, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 102, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 99, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 99, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 110, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 110, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 113, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 113, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 94, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 107, 0, 0, 0, 1, 1, 1],
                    ["green", 0, 0, 118.55, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["red_2", .2, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["red_2", .2, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["red_2", .2, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["red_2", .2, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.6, 0, 137, 0, 0, 0, 1, 1, 1],
                    ["green_1", .2, 0, 140, 0, 0, 0, 1, 1, 1],
                    ["green_1", .2, 0, 149, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 140, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 146, 0, 0, 0, 1, 1, 1],
                    ["green_1", .2, 0, 146, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 149, 0, 0, 0, 1, 1, 1],
                    ["green_1", .2, 0, 143, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 143, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 153, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 153, 0, 0, 0, 1, 1, 1],
                    ["coin", -.7, .5, 153, 0, 0, 0, 1, 1, 1],
                    ["coin", .35, .5, 155, 0, 0, 0, 1, 1, 1],
                    ["coin", -.35, .5, 155, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 157, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 157, 0, 0, 0, 1, 1, 1],
                    ["coin", -.7, .5, 157, 0, 0, 0, 1, 1, 1],
                    ["coin", .35, .5, 159, 0, 0, 0, 1, 1, 1],
                    ["coin", -.35, .5, 159, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj2", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["cj1", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["cj2", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["cj4", 0, 0, 127, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 127, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 142, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["green", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["dici", -.75, 0, 51, 0, 0, 0, 1, 1, 1],
                    ["dici", -.75, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["dici", .8, 0, 98, 0, 0, 0, 1, 1, 1],
                    ["dici", .8, 0, 96, 0, 0, 0, 1, 1, 1],
                    ["dici", .8, 0, 94, 0, 0, 0, 1, 1, 1],
                    ["red", 0, 0, 58.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 76, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 76, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 79, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 79, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 84, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 84, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 84, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 90, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 90, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 90, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 87, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 87, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 87, 0, 0, 0, 1, 1, 1],
                    ["yellow", 0, 0, 103.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 110, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 110, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 110, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 116, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 116, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 116, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 113, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 113, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 119, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 119, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 122, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 122, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 122, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 137, 0, 0, 0, 1, 1, 1],
                    ["coin", .35, .5, 140, 0, 0, 0, 1, 1, 1],
                    ["coin", -.35, .5, 140, 0, 0, 0, 1, 1, 1],
                    ["coin", -1.05, .5, 140, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 143, 0, 0, 0, 1, 1, 1],
                    ["coin", .35, .5, 146, 0, 0, 0, 1, 1, 1],
                    ["coin", -.35, .5, 146, 0, 0, 0, 1, 1, 1],
                    ["coin", -1.05, .5, 146, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj2", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["cj3", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["cj5", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["cj3", 21, 0, 165, 0, 90, 0, 1, 1, 1],
                    ["cj5", 66, 0, 165, 0, 90, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 127, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 142, 0, 0, 0, 1, 1, 1],
                    ["wan_zuo", 0, 0, 157, 0, 0, 0, -1, 1, 1],
                    ["paodao_ys", 23, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["paodao", 38, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["paodao", 83, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["paodao", 68, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["paodao", 53, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["Boat_01", -6, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["quan", 66, -1.7, 169, 0, 0, 0, 1, 1, 1],
                    ["cj6", 0, 0, 121, 0, 0, 0, 1, 1, 1],
                    ["quan", -5.03, -1.7, 33, 0, 0, 0, 1, 1, 1],
                    ["quan", -4.03, -1.7, 36, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["green", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 21, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 21, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 24, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 24, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 27, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 27, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 31, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 31, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["SpikyCylinder", 0, 0, 52.5, 0, 0, 0, .9, .9, .9],
                    ["yellow", 0, 0, 58.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 65.32, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 65.32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 65.32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 68.32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 68.32, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 68.32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 71.32, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 71.32, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 74.32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 71.32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 74.32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 81.32, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 81.32, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 81.32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 90.32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 84.32, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 84.32, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 84.32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 78.32, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 87.32, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 87.32, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 93.32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 93.32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 93.32, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 96.32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 96.32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 96.32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 99.32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 99.32, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 99.32, 0, 0, 0, 1, 1, 1],
                    ["rongyan", .9, 0, 109, 0, 0, 0, 1, 1, 1],
                    ["coin", -.6, .2, 112.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -.6, .2, 107.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -.6, .2, 105, 0, 0, 0, 1, 1, 1],
                    ["coin", -.6, .2, 110, 0, 0, 0, 1, 1, 1],
                    ["red", 0, 0, 118.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["red_2", .3, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["red_2", .3, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.3, 0, 137, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 137, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.6, 0, 140, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 140, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.3, 0, 143, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 143, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 146, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 146, 0, 0, 0, 1, 1, 1],
                    ["SpikyCylinder", 0, 0, 152, 0, 0, 0, .9, .9, .9],
                    ["yellow", 16.3, 0, 163.68, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 60, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 60, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["red_2", 60, 0, 162.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 54, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 54, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["red_2", 54, 0, 162.68, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 57, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["red_2", 57, 0, 162.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 57, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 47, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["red_2", 51, 0, 162.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 47, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 44, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["red_2", 41, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 41, 0, 162.68, 0, -90, 0, 1, 1, 1],
                    ["red_2", 38, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 38, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 35, 0, 162.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 35, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["red_2", 35, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 32, 0, 162.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 32, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["red_2", 32, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 29, 0, 162.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 29, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 26, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["green_1", 23, 0, 164.68, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 23, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 26, 0, 163.18, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 44, 0, 163.18, 0, -90, 0, 1, 1, 1],
                    ["coin", 72, .5, 164.68, 0, 0, 0, 1, 1, 1],
                    ["coin", 72, .5, 164.18, 0, 0, 0, 1, 1, 1],
                    ["coin", 72, .5, 163.18, 0, 0, 0, 1, 1, 1],
                    ["coin", 72, .5, 162.68, 0, 0, 0, 1, 1, 1],
                    ["coin", 70, .5, 164.18, 0, 0, 0, 1, 1, 1],
                    ["coin", 70, .5, 163.18, 0, 0, 0, 1, 1, 1],
                    ["coin", 68, .5, 164.18, 0, 0, 0, 1, 1, 1],
                    ["coin", 68, .5, 163.18, 0, 0, 0, 1, 1, 1],
                    ["coin", 66, .5, 164.68, 0, 0, 0, 1, 1, 1],
                    ["coin", 66, .5, 164.18, 0, 0, 0, 1, 1, 1],
                    ["coin", 66, .5, 163.18, 0, 0, 0, 1, 1, 1],
                    ["coin", 66, .5, 162.68, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj2", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["cj1", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["cj1", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["cj6", 0, 0, 120.5, 0, 0, 0, 1, 1, 1],
                    ["cj1", -9, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["cj4", -54, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 127, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 142, 0, 0, 0, 1, 1, 1],
                    ["wan_you", 0, 0, 157, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", -9.75, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["paodao", -24.75, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["paodao", -39.75, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["paodao", -54.75, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["paodao", -69.75, 0, 163.68, 0, -90, 0, 1, 1, 1],
                    ["Boat_01", -6, 0, 36, 0, 0, 0, 1, 1, 1],
                    ["quan", -104, -1.7, 170, 0, 0, 0, 1, 1, 1],
                    ["quan", -2, -1.7, 185, 0, 0, 0, 1, 1, 1],
                    ["quan", 5, -1.7, 168, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["yellow", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 45, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 42, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 42, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 51, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 51, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 51, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 48, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 48, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 48, 0, 0, 0, 1, 1, 1],
                    ["green", 0, 0, 58.55, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 75, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 75, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 81, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 81, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 78, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 78, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 91, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 91, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 85, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 88, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 85, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 88, 0, 0, 0, 1, 1, 1],
                    ["rongyan", .9, 0, 111, 0, 0, 0, 1, 1, 1],
                    ["rongyan", .9, 0, 98.5, 0, 0, 0, 1, 1, 1],
                    ["rongyan", .9, 0, 104.8, 0, 0, 0, 1, 1, 1],
                    ["coin", -.4, .5, 106, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 107.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -.4, .5, 109, 0, 0, 0, 1, 1, 1],
                    ["coin", -.4, .5, 97, 0, 0, 0, 1, 1, 1],
                    ["coin", -.4, .5, 100, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 98.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 101.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 104.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -.4, .5, 103, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 110.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -.4, .5, 112.5, 0, 0, 0, 1, 1, 1],
                    ["red", 0, 0, 118.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["red_2", .3, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["red_2", .6, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["red_2", .3, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 137, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 137, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 137, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.3, 0, 140, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 140, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.6, 0, 143, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 143, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.3, 0, 146, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 146, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 149, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 149, 0, 0, 0, 1, 1, 1],
                    ["Pendulum", 0, 0, 154.5, 0, 0, 0, 1, 1, 1],
                    ["yellow", -16.35, 0, 163.68, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -23, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -23, 0, 163.68, 0, 90, 0, 1, 1, 1],
                    ["red_2", -23, 0, 162.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -26, 0, 163.68, 0, 90, 0, 1, 1, 1],
                    ["yellow_1", -26, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["red_2", -26, 0, 162.68, 0, 90, 0, 1, 1, 1],
                    ["yellow_1", -29, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["red_2", -29, 0, 162.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -29, 0, 163.68, 0, 90, 0, 1, 1, 1],
                    ["red_2", -32, 0, 162.68, 0, 90, 0, 1, 1, 1],
                    ["yellow_1", -35, 0, 163.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -35, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -38, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -41, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["yellow_1", -41, 0, 162.68, 0, 90, 0, 1, 1, 1],
                    ["red_2", -44, 0, 163.68, 0, 90, 0, 1, 1, 1],
                    ["yellow_1", -44, 0, 162.68, 0, 90, 0, 1, 1, 1],
                    ["red_2", -47, 0, 163.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -47, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["yellow_1", -53, 0, 162.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -53, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["red_2", -53, 0, 163.68, 0, 90, 0, 1, 1, 1],
                    ["yellow_1", -50, 0, 162.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -50, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["red_2", -50, 0, 163.68, 0, 90, 0, 1, 1, 1],
                    ["yellow_1", -56, 0, 162.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -56, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -59, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["green_1", -62, 0, 164.68, 0, 90, 0, 1, 1, 1],
                    ["yellow_1", -62, 0, 163.68, 0, 90, 0, 1, 1, 1],
                    ["coin", -65, .5, 164.68, 0, 0, 0, 1, 1, 1],
                    ["coin", -65, .5, 164, 0, 0, 0, 1, 1, 1],
                    ["coin", -65, .5, 163.32, 0, 0, 0, 1, 1, 1],
                    ["coin", -65, .5, 162.68, 0, 0, 0, 1, 1, 1],
                    ["coin", -67.5, .5, 164, 0, 0, 0, 1, 1, 1],
                    ["coin", -67.5, .5, 163.32, 0, 0, 0, 1, 1, 1],
                    ["coin", -70, .5, 164.68, 0, 0, 0, 1, 1, 1],
                    ["coin", -70, .5, 164, 0, 0, 0, 1, 1, 1],
                    ["coin", -70, .5, 163.32, 0, 0, 0, 1, 1, 1],
                    ["coin", -70, .5, 162.68, 0, 0, 0, 1, 1, 1],
                    ["coin", -72.5, .5, 164, 0, 0, 0, 1, 1, 1],
                    ["coin", -72.5, .5, 163.32, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj6", 0, 0, 120.5, 0, 0, 0, 1, 1, 1],
                    ["cj5", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["cj5", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["cj5", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["cj3", 29.2, 0, 163.63, 0, 90, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 127, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 142, 0, 0, 0, 1, 1, 1],
                    ["Boat_02", 5, 0, 175, 0, 90, 0, 1, 1, 1],
                    ["wan_zuo", 0, 0, 157, 0, 0, 0, -1, 1, 1],
                    ["paodao", 38, 0, 163.63, 0, -90, 0, 1, 1, 1],
                    ["paodao", 23, 0, 163.63, 0, -90, 0, 1, 1, 1],
                    ["Boat_01", -6, 0, 54, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["red", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 33, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 33, 0, 0, 0, 1, 1, 1],
                    ["coin", -.7, .5, 33, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 36, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 36, 0, 0, 0, 1, 1, 1],
                    ["coin", -.7, .5, 36, 0, 0, 0, 1, 1, 1],
                    ["RotatingCylinder", 0, 0, 43.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["coin", -.7, .5, 94, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.5, 0, 62, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 62, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 59, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["yellow", 0, 0, 73.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.7, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.7, 0, 87, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 90, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.7, 0, 90, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 87, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.7, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 94, 0, 0, 0, 1, 1, 1],
                    ["coin", -.7, .5, 98, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 94, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 98, 0, 0, 0, 1, 1, 1],
                    ["coin", -.35, .5, 96, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 98, 0, 0, 0, 1, 1, 1],
                    ["coin", .35, .5, 96, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 102, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 102, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 102, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 105, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 105, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 105, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 109, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 109, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 109, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["green", 0, 0, 118.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.7, 0, 134, 0, 0, 0, 1, 1, 1],
                    ["green_1", .7, 0, 137, 0, 0, 0, 1, 1, 1],
                    ["green_1", .3, 0, 140, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.3, 0, 137, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 143, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 143, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 149, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 149, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 149, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 146, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 146, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 146, 0, 0, 0, 1, 1, 1],
                    ["SpikyCylinder", 0, 0, 154, 0, 0, 0, .9, .9, .9],
                    ["coin", 12, .5, 163.63, 0, 0, 0, 1, 1, 1],
                    ["coin", 15, .5, 162.63, 0, 0, 0, 1, 1, 1],
                    ["coin", 15, .5, 163.13, 0, 0, 0, 1, 1, 1],
                    ["coin", 18, .5, 162.63, 0, 0, 0, 1, 1, 1],
                    ["coin", 18, .5, 163.13, 0, 0, 0, 1, 1, 1],
                    ["coin", 21, .5, 163.63, 0, 0, 0, 1, 1, 1],
                    ["coin", 27, .5, 164.63, 0, 0, 0, 1, 1, 1],
                    ["coin", 27, .5, 164.13, 0, 0, 0, 1, 1, 1],
                    ["coin", 24, .5, 164.63, 0, 0, 0, 1, 1, 1],
                    ["coin", 24, .5, 164.13, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj2", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["cj4", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["cj6", 0, 0, 75, 0, 0, 0, 1, 1, 1],
                    ["cj1", 45.6, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["cj4", 45.6, 0, 172, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["Boat_01", -7, 0, 35.5, 0, 0, 0, 1, 1, 1],
                    ["Boat_01", 28, 0, 125, 0, 90, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["wan_zuo", 0, 0, 112, 0, 0, 0, -1, 1, 1],
                    ["Boat_02", 60, 0, 116, 0, 90, 0, 1, 1, 1],
                    ["paodao", 23, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["paodao", 38, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["wan_you", 39, 0, 118.6, 0, 90, 0, 1, 1, 1],
                    ["paodao_ys", 45.6, 0, 128.35, 0, 0, 0, 1, 1, 1],
                    ["paodao", 45.6, 0, 158.35, 0, 0, 0, 1, 1, 1],
                    ["paodao", 45.6, 0, 143.35, 0, 0, 0, 1, 1, 1],
                    ["paodao", 45.6, 0, 173.35, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["yellow", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 31, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 31, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 31, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 49, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 49, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 49, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 43, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 43, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 43, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 46, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 46, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 46, 0, 0, 0, 1, 1, 1],
                    ["green", 0, 0, 58.55, 0, 0, 0, 1, 1, 1],
                    ["Pendulum", 0, 0, 66, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 74, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 74, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 74, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 77, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 77, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 77, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["coin", .5, .5, 84, 0, 0, 0, 1, 1, 1],
                    ["coin", -.5, .5, 84, 0, 0, 0, 1, 1, 1],
                    ["coin", .5, .5, 87, 0, 0, 0, 1, 1, 1],
                    ["coin", -.5, .5, 87, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 94, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 94, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 94, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 91, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 91, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 91, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 100, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 100, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 100, 0, 0, 0, 1, 1, 1],
                    ["coin", .5, .5, 104, 0, 0, 0, 1, 1, 1],
                    ["coin", -.5, .5, 104, 0, 0, 0, 1, 1, 1],
                    ["coin", .5, .5, 107, 0, 0, 0, 1, 1, 1],
                    ["coin", -.5, .5, 107, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 12, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["red_2", 12, 0, 119.6, 0, -90, 0, 1, 1, 1],
                    ["green_1", 12, 0, 117.6, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 20, 0, 117.6, 0, -90, 0, 1, 1, 1],
                    ["red_2", 20, 0, 119.6, 0, -90, 0, 1, 1, 1],
                    ["green_1", 20, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 23, 0, 117.6, 0, -90, 0, 1, 1, 1],
                    ["red_2", 23, 0, 119.6, 0, -90, 0, 1, 1, 1],
                    ["green_1", 23, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 26, 0, 117.6, 0, -90, 0, 1, 1, 1],
                    ["red_2", 26, 0, 119.6, 0, -90, 0, 1, 1, 1],
                    ["green_1", 26, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 15, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["green_1", 15, 0, 117.6, 0, -90, 0, 1, 1, 1],
                    ["red_2", 15, 0, 119.6, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 31, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["green_1", 31, 0, 119.6, 0, -90, 0, 1, 1, 1],
                    ["red_2", 31, 0, 117.6, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 34, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["red_2", 34, 0, 117.6, 0, -90, 0, 1, 1, 1],
                    ["green_1", 34, 0, 119.6, 0, -90, 0, 1, 1, 1],
                    ["SpikyCylinder", 37.5, 0, 118.6, 0, 0, 0, .9, .9, .9],
                    ["red", 45.6, 0, 135, 0, 0, 0, 1, 1, 1],
                    ["red_2", 46.2, 0, 142, 0, 0, 0, 1, 1, 1],
                    ["green_1", 45, 0, 142, 0, 0, 0, 1, 1, 1],
                    ["red_2", 46.2, 0, 145, 0, 0, 0, 1, 1, 1],
                    ["green_1", 45, 0, 145, 0, 0, 0, 1, 1, 1],
                    ["red_2", 46.2, 0, 151, 0, 0, 0, 1, 1, 1],
                    ["green_1", 45, 0, 148, 0, 0, 0, 1, 1, 1],
                    ["red_2", 46.2, 0, 148, 0, 0, 0, 1, 1, 1],
                    ["red_2", 44.6, 0, 163, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 46.6, 0, 163, 0, 0, 0, 1, 1, 1],
                    ["red_2", 44.6, 0, 160, 0, 0, 0, 1, 1, 1],
                    ["green_1", 45.6, 0, 160, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 46.6, 0, 160, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 46.6, 0, 157, 0, 0, 0, 1, 1, 1],
                    ["green_1", 45.6, 0, 157, 0, 0, 0, 1, 1, 1],
                    ["red_2", 44.6, 0, 157, 0, 0, 0, 1, 1, 1],
                    ["red_2", 44.6, 0, 166, 0, 0, 0, 1, 1, 1],
                    ["green_1", 45.6, 0, 166, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 46.6, 0, 166, 0, 0, 0, 1, 1, 1],
                    ["green_1", 45, 0, 151, 0, 0, 0, 1, 1, 1],
                    ["green_1", 45.6, 0, 163, 0, 0, 0, 1, 1, 1],
                    ["red_2", 45.6, 0, 154, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.92, .5, 173, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.22, .5, 173, 0, 0, 0, 1, 1, 1],
                    ["coin", 44.52, .5, 173, 0, 0, 0, 1, 1, 1],
                    ["coin", 46.52, .5, 176, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.82, .5, 176, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.12, .5, 176, 0, 0, 0, 1, 1, 1],
                    ["coin", 46.62, .5, 170, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.92, .5, 170, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.22, .5, 170, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj3", 0, 0, -15, 0, 0, 0, 1, 1, 1],
                    ["cj5", 0, 0, 30, 0, 0, 0, 1, 1, 1],
                    ["cj5", -91, 0, 99, 0, 0, 0, 1, 1, 1],
                    ["cj6", -47, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["cj3", -10, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["cj3", -90.93, 0, 144, 0, 0, 0, 1, 1, 1],
                    ["cj3", -90.93, 0, 189, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["quan", -3, -1.7, 92, 0, 0, 0, 1, 1, 1],
                    ["quan", 6, -1.7, 82, 0, 90, 0, 1, 1, 1],
                    ["quan", -83, -1.7, 203, 0, 0, 0, 1, 1, 1],
                    ["quan", -82, -1.7, 207, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["wan_you", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", -9.3, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["paodao", -24.3, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["paodao_ys", -39.3, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["paodao", -54.3, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["paodao", -69.3, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["wan_zuo", -84.3, 0, 73.64, 0, -90, 0, -1, 1, 1],
                    ["paodao_ys", -90.93, 0, 83.37, 0, 0, 0, 1, 1, 1],
                    ["paodao", -90.93, 0, 98.37, 0, 0, 0, 1, 1, 1],
                    ["paodao", -90.93, 0, 128.37, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", -90.93, 0, 113.37, 0, 0, 0, 1, 1, 1],
                    ["paodao", -90.93, 0, 143.37, 0, 0, 0, 1, 1, 1],
                    ["paodao", -90.93, 0, 158.37, 0, 0, 0, 1, 1, 1],
                    ["paodao", -90.93, 0, 173.37, 0, 0, 0, 1, 1, 1],
                    ["paodao", -90.93, 0, 188.37, 0, 0, 0, 1, 1, 1],
                    ["Boat_02", -107, 0, 85, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["yellow", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.6, 0, 30, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 30, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.3, 0, 33, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 33, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 36, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 36, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 40, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 40, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 40, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 46, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 46, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 46, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 43, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 43, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 43, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 59, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 59, 0, 0, 0, 1, 1, 1],
                    ["Pendulum", 0, 0, 64, 0, 0, 0, 1, 1, 1],
                    ["red_2", -11, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -11, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -11, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -14, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -14, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -14, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -17, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -20, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["coin", -20, .5, 73.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -20, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -23, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -23, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["coin", -23, .5, 73.64, 0, -90, 0, 1, 1, 1],
                    ["coin", -26, .5, 74.04, 0, -90, 0, 1, 1, 1],
                    ["coin", -26, .5, 73.24, 0, -90, 0, 1, 1, 1],
                    ["coin", -29, .5, 73.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -29, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -29, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["coin", -32, .5, 73.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -32, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -32, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -35, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -38, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -38, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -38, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["Saw", -46, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -52, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -52, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -52, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -55, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -55, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -55, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -58, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -58, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -58, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -61, 0, 74.14, 0, -90, 0, 1, 1, 1],
                    ["green_1", -64, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -64, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -64, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -67, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -67, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -70, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -70, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -70, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -73, 0, 74.24, 0, -90, 0, 1, 1, 1],
                    ["red_2", -76, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -76, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -76, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -82, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -82, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -82, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -79, 0, 73.64, 0, -90, 0, 1, 1, 1],
                    ["green_1", -79, 0, 72.64, 0, -90, 0, 1, 1, 1],
                    ["red_2", -79, 0, 74.64, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -.3, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.6, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["green", -91, 0, 90, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -92, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["red_2", -91, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["green_1", -90, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["red_2", -91, 0, 100, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -92, 0, 100, 0, 0, 0, 1, 1, 1],
                    ["green_1", -90, 0, 100, 0, 0, 0, 1, 1, 1],
                    ["red_2", -91, 0, 103, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -92, 0, 103, 0, 0, 0, 1, 1, 1],
                    ["green_1", -90, 0, 103, 0, 0, 0, 1, 1, 1],
                    ["red_2", -92, 0, 108, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 108, 0, 0, 0, 1, 1, 1],
                    ["green_1", -91, 0, 108, 0, 0, 0, 1, 1, 1],
                    ["green_1", -91, 0, 114, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 114, 0, 0, 0, 1, 1, 1],
                    ["red_2", -92, 0, 114, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 111, 0, 0, 0, 1, 1, 1],
                    ["red_2", -92, 0, 111, 0, 0, 0, 1, 1, 1],
                    ["green_1", -91, 0, 111, 0, 0, 0, 1, 1, 1],
                    ["red", -91, 0, 120, 0, 0, 0, 1, 1, 1],
                    ["dici", -91.5, 0, 129, 0, 0, 0, 1, 1, 1],
                    ["dici", -91.5, 0, 131, 0, 0, 0, 1, 1, 1],
                    ["dici", -91.5, 0, 127, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 136, 0, 0, 0, 1, 1, 1],
                    ["red_2", -92, 0, 136, 0, 0, 0, 1, 1, 1],
                    ["green_1", -91, 0, 136, 0, 0, 0, 1, 1, 1],
                    ["green_1", -91, 0, 139, 0, 0, 0, 1, 1, 1],
                    ["red_2", -92, 0, 139, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 139, 0, 0, 0, 1, 1, 1],
                    ["red_2", -91, 0, 144, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 144, 0, 0, 0, 1, 1, 1],
                    ["green_1", -92, 0, 144, 0, 0, 0, 1, 1, 1],
                    ["red_2", -90.78, 0, 147, 0, 0, 0, 1, 1, 1],
                    ["green_1", -92, 0, 147, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 147, 0, 0, 0, 1, 1, 1],
                    ["red_2", -91, 0, 150, 0, 0, 0, 1, 1, 1],
                    ["green_1", -92, 0, 150, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 150, 0, 0, 0, 1, 1, 1],
                    ["red_2", -91.23, 0, 153, 0, 0, 0, 1, 1, 1],
                    ["red_2", -91, 0, 156, 0, 0, 0, 1, 1, 1],
                    ["green_1", -92, 0, 156, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 156, 0, 0, 0, 1, 1, 1],
                    ["red_2", -91, 0, 162, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 162, 0, 0, 0, 1, 1, 1],
                    ["green_1", -92, 0, 162, 0, 0, 0, 1, 1, 1],
                    ["red_2", -90.78, 0, 159, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -90, 0, 159, 0, 0, 0, 1, 1, 1],
                    ["green_1", -92, 0, 159, 0, 0, 0, 1, 1, 1],
                    ["red_2", -90, 0, 167, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -92, 0, 167, 0, 0, 0, 1, 1, 1],
                    ["green_1", -91, 0, 167, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -92, 0, 170, 0, 0, 0, 1, 1, 1],
                    ["green_1", -91, 0, 170, 0, 0, 0, 1, 1, 1],
                    ["red_2", -90, 0, 170, 0, 0, 0, 1, 1, 1],
                    ["coin", -91.15, .5, 190, 0, 0, 0, 1, 1, 1],
                    ["coin", -91.65, .5, 190, 0, 0, 0, 1, 1, 1],
                    ["coin", -92.15, .5, 190, 0, 0, 0, 1, 1, 1],
                    ["coin", -91.15, .5, 178, 0, 0, 0, 1, 1, 1],
                    ["coin", -91.65, .5, 178, 0, 0, 0, 1, 1, 1],
                    ["coin", -92.15, .5, 178, 0, 0, 0, 1, 1, 1],
                    ["coin", -89.77, .5, 187, 0, 0, 0, 1, 1, 1],
                    ["coin", -90.27, .5, 187, 0, 0, 0, 1, 1, 1],
                    ["coin", -90.77, .5, 187, 0, 0, 0, 1, 1, 1],
                    ["coin", -89.77, .5, 181, 0, 0, 0, 1, 1, 1],
                    ["coin", -90.27, .5, 181, 0, 0, 0, 1, 1, 1],
                    ["coin", -90.77, .5, 181, 0, 0, 0, 1, 1, 1],
                    ["coin", -91.15, .5, 184, 0, 0, 0, 1, 1, 1],
                    ["coin", -91.65, .5, 184, 0, 0, 0, 1, 1, 1],
                    ["coin", -92.15, .5, 184, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj2", 0, 0, -15, 0, 0, 0, 1, 1, 1],
                    ["cj1", 0, 0, 30, 0, 0, 0, 1, 1, 1],
                    ["cj4", 0, 0, 75, 0, 0, 0, 1, 1, 1],
                    ["cj1", 0, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["cj1", -61.4, 0, 136.8, 0, 0, 0, 1, 1, 1],
                    ["cj4", -61.4, 0, 181.8, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["wan_you", 0, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["paodao", -24.75, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["paodao", -39.75, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["Boat_01", -56, 0, 125, 0, 0, 0, 1, 1, 1],
                    ["quan", -5, -1.7, 29, 0, 0, 0, 1, 1, 1],
                    ["Boat_01", 5.7, 0, 131, 0, 90, 0, 1, 1, 1],
                    ["wan_zuo", -54.8, 0, 118.63, 0, -90, 0, -1, 1, 1],
                    ["paodao_ys", -61.4, 0, 128.3, 0, 0, 0, 1, 1, 1],
                    ["paodao", -61.4, 0, 143.3, 0, 0, 0, 1, 1, 1],
                    ["paodao", -61.4, 0, 158.3, 0, 0, 0, 1, 1, 1],
                    ["paodao", -61.4, 0, 173.3, 0, 0, 0, 1, 1, 1],
                    ["paodao", -61.4, 0, 188.3, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", -9.75, 0, 118.63, 0, -90, 0, 1, 1, 1]
                ],
                [
                    ["green", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 34, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 40, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 40, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 40, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 43, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 43, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 43, 0, 0, 0, 1, 1, 1],
                    ["dici", -.5, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["dici", -.5, 0, 48, 0, 0, 0, 1, 1, 1],
                    ["dici", -.5, 0, 46, 0, 0, 0, 1, 1, 1],
                    ["dici", -.5, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 47, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 49, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 51, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["yellow", 0, 0, 58.55, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["coin", -.6, .5, 66, 0, 0, 0, 1, 1, 1],
                    ["coin", .6, .5, 66, 0, 0, 0, 1, 1, 1],
                    ["RotatingCylinder", 0, 0, 73.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 94, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.25, 0, 91, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 66, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 53, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 94, 0, 0, 0, 1, 1, 1],
                    ["green_1", .25, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.75, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["green_1", .75, 0, 91, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 102, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 102, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 102, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 105, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 105, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 105, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 108, 0, 0, 0, 1, 1, 1],
                    ["red_2", -23, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -23, 0, 117.63, 0, -90, 0, 1, 1, 1],
                    ["green_1", -23, 0, 119.63, 0, -90, 0, 1, 1, 1],
                    ["red_2", -26, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -26, 0, 117.63, 0, -90, 0, 1, 1, 1],
                    ["green_1", -26, 0, 119.63, 0, -90, 0, 1, 1, 1],
                    ["red_2", -29, 0, 119.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -32, 0, 117.63, 0, -90, 0, 1, 1, 1],
                    ["green_1", -32, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["red_2", -32, 0, 119.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -29, 0, 117.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["green_1", -29, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -44, 0, 119.63, 0, -90, 0, 1, 1, 1],
                    ["red", -16.35, 0, 118.63, 0, 0, 0, 1, 1, 1],
                    ["red_2", -44, 0, 117.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 108, 0, 0, 0, 1, 1, 1],
                    ["red_2", -35, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -35, 0, 119.63, 0, -90, 0, 1, 1, 1],
                    ["green_1", -35, 0, 117.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -38, 0, 119.63, 0, -90, 0, 1, 1, 1],
                    ["red_2", 1, 0, 108, 0, 0, 0, 1, 1, 1],
                    ["green_1", -38, 0, 117.63, 0, -90, 0, 1, 1, 1],
                    ["green_1", -44, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["red_2", -38, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -41, 0, 119.63, 0, -90, 0, 1, 1, 1],
                    ["green_1", -41, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["red_2", -41, 0, 117.63, 0, -90, 0, 1, 1, 1],
                    ["Pendulum", -48, 0, 118.63, 0, 90, 0, 1, 1, 1],
                    ["green_1", -60.8, 0, 141, 0, 0, 0, 1, 1, 1],
                    ["rongyan", -60.6, 0, 159, 0, 0, 0, 1, 1, 1],
                    ["green_1", -60.8, 0, 147, 0, 0, 0, 1, 1, 1],
                    ["green_1", -61.6, 0, 153, 0, 0, 0, 1, 1, 1],
                    ["green_1", -62.1, 0, 162, 0, 0, 0, 1, 1, 1],
                    ["coin", -61, .5, 170, 0, 0, 0, 1, 1, 1],
                    ["green_1", -62.1, 0, 159, 0, 0, 0, 1, 1, 1],
                    ["red_2", -60.4, 0, 153, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.6, .5, 167, 0, 0, 0, 1, 1, 1],
                    ["coin", -60.4, .5, 167, 0, 0, 0, 1, 1, 1],
                    ["coin", -61, .5, 167, 0, 0, 0, 1, 1, 1],
                    ["coin", -52, .5, 118.13, 0, 0, 0, 1, 1, 1],
                    ["green", -61.4, 0, 134.88, 0, 0, 0, 1, 1, 1],
                    ["coin", -52, .5, 119.13, 0, 0, 0, 1, 1, 1],
                    ["rongyan", -62.2, 0, 145, 0, 0, 0, 1, 1, 1],
                    ["coin", -62.65, .5, 176, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.45, .5, 176, 0, 0, 0, 1, 1, 1],
                    ["coin", -62.05, .5, 176, 0, 0, 0, 1, 1, 1],
                    ["green_1", -60.8, 0, 144, 0, 0, 0, 1, 1, 1],
                    ["coin", -62.05, .5, 173, 0, 0, 0, 1, 1, 1],
                    ["coin", -62.05, .5, 179, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.6, .5, 185, 0, 0, 0, 1, 1, 1],
                    ["coin", -60.4, .5, 185, 0, 0, 0, 1, 1, 1],
                    ["green_1", -61.2, 0, 150, 0, 0, 0, 1, 1, 1],
                    ["coin", -61, .5, 185, 0, 0, 0, 1, 1, 1],
                    ["coin", -61, .5, 182, 0, 0, 0, 1, 1, 1],
                    ["coin", -61, .5, 188, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -62.4, 0, 150, 0, 0, 0, 1, 1, 1],
                    ["green_1", -62.1, 0, 156, 0, 0, 0, 1, 1, 1],
                    ["coin", -62.05, .5, 191, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj5", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["cj5", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["cj3", -54, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["cj3", -9, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["quan", -5, -1.7, 36, 0, 0, 0, 1, 1, 1],
                    ["quan", -3, -1.7, 103, 0, 0, 0, 1, 1, 1],
                    ["Boat_01", 9, 0, 90, 0, 90, 0, 1, 1, 1],
                    ["Boat_02", -110, 0, 100, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["wan_you", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", -9.73, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["paodao_ys", -24.73, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["paodao", -39.73, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["paodao_ys", -54.73, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["paodao_ys", -69.73, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["paodao", -84.73, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["paodao", -99.73, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["wan_zuo", -114.73, 0, 88.66, 0, -90, 0, -1, 1, 1],
                    ["paodao", -121.38, 0, 98.38, 0, 0, 0, 1, 1, 1],
                    ["paodao", -121.38, 0, 113.38, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["red", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["red_2", .4, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.7, 0, 62, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 62, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 56, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.4, 0, 59, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 59, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 68, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 68, 0, 0, 0, 1, 1, 1],
                    ["coin", -.7, .5, 68, 0, 0, 0, 1, 1, 1],
                    ["RotatingCylinder", 0, 0, 73.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -11, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -11, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -11, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -14, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -14, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -14, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -17, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -17, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -17, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -20, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -20, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -20, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -23, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -23, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -23, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -26, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -26, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -26, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["green", -31.3, 0, 88.66, 0, 0, 0, 1, 1, 1],
                    ["coin", -69, .5, 88.66, 0, 0, 0, 1, 1, 1],
                    ["coin", -69, .5, 87.66, 0, 0, 0, 1, 1, 1],
                    ["coin", -69, .5, 89.66, 0, 0, 0, 1, 1, 1],
                    ["yellow", -76.35, 0, 88.66, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -38, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -38, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -38, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -41, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -41, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -41, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -47, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -50, 0, 88.16, 0, -90, 0, 1, 1, 1],
                    ["green_1", -44, 0, 89.16, 0, -90, 0, 1, 1, 1],
                    ["green_1", -53, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -53, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -53, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -56, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -56, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -56, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["RotatingCylinder", -61.3, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -82, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -82, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -82, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -85, 0, 89.46, 0, -90, 0, 1, 1, 1],
                    ["red_2", -85, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -85, 0, 87.86, 0, -90, 0, 1, 1, 1],
                    ["green_1", -88, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -88, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -88, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["coin", -91, .5, 88.66, 0, 0, 0, 1, 1, 1],
                    ["coin", -91, .5, 87.66, 0, 0, 0, 1, 1, 1],
                    ["coin", -91, .5, 89.66, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -94, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -100, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -100, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -97, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -97, 0, 87.86, 0, -90, 0, 1, 1, 1],
                    ["green_1", -94, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -94, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -97, 0, 89.46, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -100, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["coin", -103, .5, 88.66, 0, 0, 0, 1, 1, 1],
                    ["coin", -103, .5, 87.66, 0, 0, 0, 1, 1, 1],
                    ["coin", -103, .5, 89.66, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -106, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -109, 0, 87.86, 0, -90, 0, 1, 1, 1],
                    ["red_2", -109, 0, 89.46, 0, -90, 0, 1, 1, 1],
                    ["green_1", -112, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -112, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["green_1", -106, 0, 87.66, 0, -90, 0, 1, 1, 1],
                    ["red_2", -106, 0, 89.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -109, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -112, 0, 88.66, 0, -90, 0, 1, 1, 1],
                    ["coin", -121.38, .5, 100, 0, 0, 0, 1, 1, 1],
                    ["coin", -122.58, .5, 100, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.98, .5, 100, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.38, .5, 102, 0, 0, 0, 1, 1, 1],
                    ["coin", -122.58, .5, 102, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.38, .5, 104, 0, 0, 0, 1, 1, 1],
                    ["coin", -122.58, .5, 104, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.98, .5, 104, 0, 0, 0, 1, 1, 1],
                    ["coin", -120.18, .5, 106, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.38, .5, 106, 0, 0, 0, 1, 1, 1],
                    ["coin", -120.78, .5, 106, 0, 0, 0, 1, 1, 1],
                    ["coin", -120.18, .5, 108, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.38, .5, 108, 0, 0, 0, 1, 1, 1],
                    ["coin", -120.18, .5, 110, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.38, .5, 110, 0, 0, 0, 1, 1, 1],
                    ["coin", -120.78, .5, 110, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.38, .5, 112, 0, 0, 0, 1, 1, 1],
                    ["coin", -122.58, .5, 112, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.98, .5, 112, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.38, .5, 114, 0, 0, 0, 1, 1, 1],
                    ["coin", -122.58, .5, 114, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.38, .5, 116, 0, 0, 0, 1, 1, 1],
                    ["coin", -122.58, .5, 116, 0, 0, 0, 1, 1, 1],
                    ["coin", -121.98, .5, 116, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj2", 0, 0, -30, 0, 0, 0, 1, 1, 1],
                    ["cj1", 0, 0, 15, 0, 0, 0, 1, 1, 1],
                    ["cj4", 0, 0, 60, 0, 0, 0, 1, 1, 1],
                    ["cj4", 45.6, 0, 173, 0, 0, 0, 1, 1, 1],
                    ["cj1", 45.6, 0, 128, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["quan", 53, -1.7, 226, 0, 0, 0, 1, 1, 1],
                    ["Boat_01", -5, 0, 119, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["wan_zuo", 0, 0, 112, 0, 0, 0, -1, 1, 1],
                    ["Boat_02", 55, 0, 117, 0, 90, 0, 1, 1, 1],
                    ["paodao_ys", 23, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["paodao_ys", 38, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["wan_you", 39, 0, 118.6, 0, 90, 0, 1, 1, 1],
                    ["paodao", 45.6, 0, 128.35, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 45.6, 0, 158.35, 0, 0, 0, 1, 1, 1],
                    ["paodao", 45.6, 0, 143.35, 0, 0, 0, 1, 1, 1],
                    ["paodao", 45.6, 0, 173.35, 0, 0, 0, 1, 1, 1],
                    ["paodao", 45.6, 0, 188.35, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["green", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.4, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["green_1", .4, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["Saw", 0, 0, 58.55, 0, 0, 0, 1, 1, 1],
                    ["coin", .5, .5, 67, 0, 0, 0, 1, 1, 1],
                    ["coin", -.5, .5, 67, 0, 0, 0, 1, 1, 1],
                    ["coin", .5, .5, 65, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["Saw", 0, 0, 73.55, 0, 180, 0, 1, 1, 1],
                    ["coin", -.5, .5, 65, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 98, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 98, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 98, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 95, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 95, 0, 0, 0, 1, 1, 1],
                    ["green_1", .5, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 92, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 92, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 89, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 89, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 89, 0, 0, 0, 1, 1, 1],
                    ["yellow", 0, 0, 103.55, 0, 0, 0, 1, 1, 1],
                    ["Saw", 16.4, 0, 118.6, 0, -90, 0, 1, 1, 1],
                    ["coin", 10.5, .5, 119.1, 0, 0, 0, 1, 1, 1],
                    ["coin", 10.5, .5, 118.1, 0, 0, 0, 1, 1, 1],
                    ["coin", 37, .5, 119.1, 0, 0, 0, 1, 1, 1],
                    ["red_2", 44.6, 0, 130, 0, 0, 0, 1, 1, 1],
                    ["coin", 22.5, .5, 119.1, 0, 0, 0, 1, 1, 1],
                    ["coin", 22.5, .5, 118.1, 0, 0, 0, 1, 1, 1],
                    ["coin", 24.5, .5, 119.1, 0, 0, 0, 1, 1, 1],
                    ["coin", 24.5, .5, 118.1, 0, 0, 0, 1, 1, 1],
                    ["Saw", 31.4, 0, 118.6, 0, 90, 0, 1, 1, 1],
                    ["yellow_1", 46.6, 0, 130, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 46.3, 0, 136, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 45.6, 0, 142, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 45.2, 0, 145, 0, 0, 0, 1, 1, 1],
                    ["coin", 37, .5, 118.1, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 46.6, 0, 133, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 44.9, 0, 148, 0, 0, 0, 1, 1, 1],
                    ["green_1", 46.3, 0, 148, 0, 0, 0, 1, 1, 1],
                    ["red_2", 45.2, 0, 139, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 44.6, 0, 154, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 44.6, 0, 151, 0, 0, 0, 1, 1, 1],
                    ["red_2", 44.6, 0, 133, 0, 0, 0, 1, 1, 1],
                    ["red_2", 44.9, 0, 136, 0, 0, 0, 1, 1, 1],
                    ["green_1", 46, 0, 145, 0, 0, 0, 1, 1, 1],
                    ["Saw", 44.6, 0, 165, 0, 0, 0, 1, 1, 1],
                    ["green_1", 46.61, 0, 154, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 46, 0, 139, 0, 0, 0, 1, 1, 1],
                    ["green_1", 46.61, 0, 151, 0, 0, 0, 1, 1, 1],
                    ["coin", 46.3, .5, 158, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.6, .5, 158, 0, 0, 0, 1, 1, 1],
                    ["coin", 44.9, .5, 158, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.57, .5, 174, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.92, .5, 176, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.22, .5, 176, 0, 0, 0, 1, 1, 1],
                    ["coin", 44.52, .5, 176, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.57, .5, 178, 0, 0, 0, 1, 1, 1],
                    ["coin", 46.62, .5, 180, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.92, .5, 180, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.22, .5, 180, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.57, .5, 182, 0, 0, 0, 1, 1, 1],
                    ["coin", 46.62, .5, 172, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.92, .5, 172, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.22, .5, 172, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.92, .5, 184, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.22, .5, 184, 0, 0, 0, 1, 1, 1],
                    ["coin", 44.52, .5, 184, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.57, .5, 186, 0, 0, 0, 1, 1, 1],
                    ["coin", 46.62, .5, 188, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.92, .5, 188, 0, 0, 0, 1, 1, 1],
                    ["coin", 45.22, .5, 188, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj2", 0, 0, -20, 0, 0, 0, 1, 1, 1],
                    ["cj5", 0, 0, 25, 0, 0, 0, 1, 1, 1],
                    ["cj5", 0, 0, 70, 0, 0, 0, 1, 1, 1],
                    ["cj4", -61.4, 0, 135, 0, 0, 0, 1, 1, 1],
                    ["cj4", -61.4, 0, 180, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["wan_you", 0, 0, 112, 0, 0, 0, 1, 1, 1],
                    ["paodao", -24.75, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["paodao", -39.75, 0, 118.63, 0, -90, 0, 1, 1, 1],
                    ["quan", -5, -1.7, 70, 0, 0, 0, 1, 1, 1],
                    ["quan", -67, -1.7, 177, 0, 0, 0, 1, 1, 1],
                    ["Boat_01", -5, 0, 136, 0, 0, 0, 1, 1, 1],
                    ["wan_zuo", -54.8, 0, 118.63, 0, -90, 0, -1, 1, 1],
                    ["paodao", -61.4, 0, 143.3, 0, 0, 0, 1, 1, 1],
                    ["paodao", -61.4, 0, 158.3, 0, 0, 0, 1, 1, 1],
                    ["paodao", -61.4, 0, 173.3, 0, 0, 0, 1, 1, 1],
                    ["paodao", -61.4, 0, 188.3, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", -61.4, 0, 128.3, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", -9.75, 0, 118.63, 0, -90, 0, 1, 1, 1]
                ],
                [
                    ["yellow", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["dici", .7, 0, 41.5, 0, 0, 0, 1, 1, 1],
                    ["dici", .7, 0, 39.5, 0, 0, 0, 1, 1, 1],
                    ["dici", -.5, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["dici", -.5, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["coin", .3, .5, 47.5, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 49.5, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 51.5, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 53.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -.3, .5, 45.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -.81, .5, 39.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -.81, .5, 41.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -.81, .5, 43.5, 0, 0, 0, 1, 1, 1],
                    ["green", 0, 0, 58.55, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 74, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 74, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 74, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 77, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 77, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 77, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 0, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["red", -16.35, 0, 118.63, 0, 0, 0, 1, 1, 1],
                    ["red_2", -22, 0, 119.63, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -22, 0, 117.63, 0, -90, 0, 1, 1, 1],
                    ["red_2", -25, 0, 119.43, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -25, 0, 117.83, 0, -90, 0, 1, 1, 1],
                    ["red_2", -28, 0, 119.23, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -28, 0, 118.03, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -31, 0, 118.23, 0, -90, 0, 1, 1, 1],
                    ["red_2", -31, 0, 119.03, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -34, 0, 118.23, 0, -90, 0, 1, 1, 1],
                    ["red_2", -34, 0, 119.03, 0, -90, 0, 1, 1, 1],
                    ["green_1", -37, 0, 118.23, 0, -90, 0, 1, 1, 1],
                    ["red_2", -37, 0, 119.03, 0, -90, 0, 1, 1, 1],
                    ["red_2", -40, 0, 119.23, 0, -90, 0, 1, 1, 1],
                    ["green_1", -40, 0, 118.03, 0, -90, 0, 1, 1, 1],
                    ["green_1", -43, 0, 117.83, 0, -90, 0, 1, 1, 1],
                    ["red_2", -43, 0, 119.43, 0, -90, 0, 1, 1, 1],
                    ["green_1", -46, 0, 117.63, 0, -90, 0, 1, 1, 1],
                    ["red_2", -46, 0, 119.63, 0, -90, 0, 1, 1, 1],
                    ["rongyan", -52, 0, 119.4, 0, -90, 0, 1, 1, 1],
                    ["coin", -51, .5, 118.13, 0, 0, 0, 1, 1, 1],
                    ["coin", -49, .5, 118.13, 0, 0, 0, 1, 1, 1],
                    ["coin", -53, .5, 118.13, 0, 0, 0, 1, 1, 1],
                    ["yellow", -61.4, 0, 134.88, 0, 0, 0, 1, 1, 1],
                    ["rongyan", -62.2, 0, 144.5, 0, 0, 0, 1, 1, 1],
                    ["rongyan", -60.6, 0, 158, 0, 0, 0, 1, 1, 1],
                    ["rongyan", -62.2, 0, 173, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -60.8, 0, 143, 0, 0, 0, 1, 1, 1],
                    ["green_1", -62.4, 0, 149.25, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -61.4, 0, 149, 0, 0, 0, 1, 1, 1],
                    ["red_2", -60.4, 0, 152, 0, 0, 0, 1, 1, 1],
                    ["dici", .7, 0, 87, 0, 0, 0, 1, 1, 1],
                    ["dici", -.5, 0, 95.50001, 0, 0, 0, 1, 1, 1],
                    ["dici", -.5, 0, 97.50001, 0, 0, 0, 1, 1, 1],
                    ["dici", .7, 0, 85, 0, 0, 0, 1, 1, 1],
                    ["coin", -.3, .5, 91, 0, 0, 0, 1, 1, 1],
                    ["coin", -.81, .5, 85, 0, 0, 0, 1, 1, 1],
                    ["coin", -.81, .5, 87, 0, 0, 0, 1, 1, 1],
                    ["coin", -.81, .5, 89, 0, 0, 0, 1, 1, 1],
                    ["coin", .3, .5, 93.00001, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 95.00001, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 97.00001, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 99.00001, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 103, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 103, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 103, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 106, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 106, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 106, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 109, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 109, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 109, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -60.8, 0, 140, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -60.8, 0, 146, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -61.4, 0, 152, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -62.1, 0, 155, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -62.1, 0, 158, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -62.1, 0, 161, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -61.4, 0, 164, 0, 0, 0, 1, 1, 1],
                    ["green_1", -60.4, 0, 164, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -61.4, 0, 167, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -60.8, 0, 170, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -60.8, 0, 173, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -60.8, 0, 176, 0, 0, 0, 1, 1, 1],
                    ["red_2", -62.4, 0, 167, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.2, .5, 192.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.8, .5, 192.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.8, .5, 180, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.8, .5, 182.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.2, .5, 182.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -62.4, .5, 180, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.2, .5, 185, 0, 0, 0, 1, 1, 1],
                    ["coin", -60.6, .5, 185, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.2, .5, 187.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.8, .5, 187.5, 0, 0, 0, 1, 1, 1],
                    ["coin", -61.8, .5, 190, 0, 0, 0, 1, 1, 1],
                    ["coin", -62.4, .5, 190, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj2", 0, 0, -35, 0, 0, 0, 1, 1, 1],
                    ["cj4", 0, 0, 10, 0, 0, 0, 1, 1, 1],
                    ["cj4", 0, 0, 55, 0, 0, 0, 1, 1, 1],
                    ["Boat_02", 5, 0, 118, 0, 90, 0, 1, 1, 1],
                    ["Boat_01", -6.5, 0, 54, 0, 0, 0, 1, 1, 1],
                    ["cj3", -8, 0, 103.65, 0, -90, 0, 1, 1, 1],
                    ["cj3", -53, 0, 103.65, 0, -90, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", -9.7, 0, 103.65, 0, -90, 0, 1, 1, 1],
                    ["paodao", -24.7, 0, 103.65, 0, -90, 0, 1, 1, 1],
                    ["paodao", -39.7, 0, 103.65, 0, -90, 0, 1, 1, 1],
                    ["paodao", -54.8, 0, 103.76, 0, -90, 0, 1, 1, 1],
                    ["paodao", -69.7, 0, 103.76, 0, -90, 0, 1, 1, 1],
                    ["Boat_02", 7.9, 0, 81.7, 0, 0, 0, 1, 1, 1],
                    ["wan_you", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["quan", -5, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["quan", -100.1, 0, 97.39, 0, 0, 0, 1, 1, 1],
                    ["quan", -103.1, 0, 98.69, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["yellow", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 20, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 41, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.5, 0, 44, 0, 0, 0, 1, 1, 1],
                    ["red_2", .5, 0, 26, 0, 0, 0, 1, 1, 1],
                    ["red_2", .75, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["red_2", .75, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.5, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.75, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["green_1", -1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.75, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .5, 0, 29, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .75, 0, 38, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", .75, 0, 32, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", 1, 0, 35, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.75, 0, 23, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -.75, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["SpikyCylinder", -11.11, 0, 103.68, 0, 0, 0, .9, .9, .9],
                    ["red", -16.29, 0, 103.65, 0, 0, 0, 1, 1, 1],
                    ["red_2", -23, 0, 103.65, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -23, 0, 102.65, 0, -90, 0, 1, 1, 1],
                    ["red_2", -26, 0, 103.95, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -26, 0, 102.95, 0, -90, 0, 1, 1, 1],
                    ["red_2", -29, 0, 104.25, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -29, 0, 103.15, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -32, 0, 102.65, 0, -90, 0, 1, 1, 1],
                    ["red_2", -32, 0, 103.65, 0, -90, 0, 1, 1, 1],
                    ["green_1", -32, 0, 104.65, 0, -90, 0, 1, 1, 1],
                    ["green_1", -35, 0, 104.35, 0, -90, 0, 1, 1, 1],
                    ["red_2", -35, 0, 103.35, 0, -90, 0, 1, 1, 1],
                    ["green_1", -38, 0, 104.05, 0, -90, 0, 1, 1, 1],
                    ["red_2", -38, 0, 103.05, 0, -90, 0, 1, 1, 1],
                    ["green_1", -41, 0, 104.35, 0, -90, 0, 1, 1, 1],
                    ["red_2", -41, 0, 103.35, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -44, 0, 102.65, 0, -90, 0, 1, 1, 1],
                    ["red_2", -44, 0, 103.65, 0, -90, 0, 1, 1, 1],
                    ["green_1", -44, 0, 104.65, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -47, 0, 102.95, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -50, 0, 103.15, 0, -90, 0, 1, 1, 1],
                    ["red_2", -50, 0, 104.15, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -53, 0, 102.95, 0, -90, 0, 1, 1, 1],
                    ["yellow_1", -56, 0, 102.65, 0, -90, 0, 1, 1, 1],
                    ["red_2", -53, 0, 103.95, 0, -90, 0, 1, 1, 1],
                    ["red_2", -56, 0, 103.65, 0, -90, 0, 1, 1, 1],
                    ["Pendulum", -60, 0, 103.65, 0, -90, 0, 1, 1, 1],
                    ["Pendulum", 0, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["green", 0, 0, 58.55, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 65, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 68, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 95, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 95, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 95, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 74, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 71, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 73.57, 0, 0, 0, 1, 1, 1],
                    ["green_1", .4, 0, 74, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 77, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["green_1", -.6, 0, 80, 0, 0, 0, 1, 1, 1],
                    ["green_1", 0, 0, 83, 0, 0, 0, 1, 1, 1],
                    ["green_1", .4, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["yellow_1", -1, 0, 86, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 92, 0, 0, 0, 1, 1, 1],
                    ["green_1", 1, 0, 89, 0, 0, 0, 1, 1, 1],
                    ["coin", -72, .5, 104.31, 0, 0, 0, 1, 1, 1],
                    ["coin", -72, .5, 103.31, 0, 0, 0, 1, 1, 1],
                    ["coin", -64, .5, 104.31, 0, 0, 0, 1, 1, 1],
                    ["coin", -64, .5, 103.31, 0, 0, 0, 1, 1, 1],
                    ["coin", -68, .5, 104.31, 0, 0, 0, 1, 1, 1],
                    ["coin", -68, .5, 103.31, 0, 0, 0, 1, 1, 1],
                    ["coin", -66, .5, 103.81, 0, 0, 0, 1, 1, 1],
                    ["coin", -66, .5, 104.81, 0, 0, 0, 1, 1, 1],
                    ["coin", -66, .5, 102.81, 0, 0, 0, 1, 1, 1],
                    ["coin", -70, .5, 103.81, 0, 0, 0, 1, 1, 1],
                    ["coin", -70, .5, 104.81, 0, 0, 0, 1, 1, 1],
                    ["coin", -70, .5, 102.81, 0, 0, 0, 1, 1, 1]
                ]
            ],
            [
                [
                    ["cj2", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["cj1", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["cj4", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["cj6", 0, 0, 127, 0, 0, 0, 1, 1, 1],
                    ["Boat_01", -6, 0, 36, 0, 0, 0, 1, 1, 1],
                    ["Boat_02", 8, 0, 190, 0, 44.99999361401253, 0, 1, 1, 1],
                    ["Boat_01", -6, 0, 126, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, -8, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 7, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 22, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 37, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 67, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 52, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 142, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 82, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 97, 0, 0, 0, 1, 1, 1],
                    ["paodao", 0, 0, 127, 0, 0, 0, 1, 1, 1],
                    ["paodao_ys", 0, 0, 112, 0, 0, 0, 1, 1, 1]
                ],
                [
                    ["red", 0, 0, 13.55, 0, 0, 0, 1, 1, 1],
                    ["Star", 0, -.5, 21, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 25, 0, 0, 0, 1, 1, 1],
                    ["red_2", .2, 0, 25, 0, 0, 0, 1, 1, 1],
                    ["red_2", .2, 0, 28, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 28, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 31, 0, 0, 0, 1, 1, 1],
                    ["red_2", .2, 0, 31, 0, 0, 0, 1, 1, 1],
                    ["red_2", .2, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 53, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["red_2", .2, 0, 47, 0, 0, 0, 1, 1, 1],
                    ["red_2", .2, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 50, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 42, 0, 0, 0, 1, 1, 1],
                    ["coin", -.2, .5, 42, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 39, 0, 0, 0, 1, 1, 1],
                    ["coin", -.2, .5, 39, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 36, 0, 0, 0, 1, 1, 1],
                    ["coin", -.2, .5, 36, 0, 0, 0, 1, 1, 1],
                    ["coin", 1, .5, 71.6, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 71.6, 0, 0, 0, 1, 1, 1],
                    ["coin", 1, .5, 75.6, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 75.6, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 73.6, 0, 0, 0, 1, 1, 1],
                    ["coin", 2, .5, 73.6, 0, 0, 0, 1, 1, 1],
                    ["coin", -2, .5, 73.6, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.4, 0, 81, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 81, 0, 0, 0, 1, 1, 1],
                    ["red_2", .3, 0, 81, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 84, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 84, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.7, 0, 84, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 87, 0, 0, 0, 1, 1, 1],
                    ["red_2", .4, 0, 87, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.3, 0, 87, 0, 0, 0, 1, 1, 1],
                    ["coin", .7, .5, 91, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 94, 0, 0, 0, 1, 1, 1],
                    ["coin", .4, .5, 94, 0, 0, 0, 1, 1, 1],
                    ["coin", 1, .5, 116.6, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 118.6, 0, 0, 0, 1, 1, 1],
                    ["coin", -.7, .5, 91, 0, 0, 0, 1, 1, 1],
                    ["red_2", 1, 0, 98, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.4, 0, 98, 0, 0, 0, 1, 1, 1],
                    ["red_2", .3, 0, 98, 0, 0, 0, 1, 1, 1],
                    ["red_2", .7, 0, 101, 0, 0, 0, 1, 1, 1],
                    ["red_2", 0, 0, 101, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.7, 0, 101, 0, 0, 0, 1, 1, 1],
                    ["red_2", .4, 0, 104, 0, 0, 0, 1, 1, 1],
                    ["red_2", -.3, 0, 104, 0, 0, 0, 1, 1, 1],
                    ["red_2", -1, 0, 104, 0, 0, 0, 1, 1, 1],
                    ["coin", 1, .5, 108, 0, 0, 0, 1, 1, 1],
                    ["coin", -.4, .5, 108, 0, 0, 0, 1, 1, 1],
                    ["coin", .4, .5, 111, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 111, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 120.6, 0, 0, 0, 1, 1, 1],
                    ["coin", 2, .5, 118.6, 0, 0, 0, 1, 1, 1],
                    ["coin", -2, .5, 118.47, 0, 0, 0, 1, 1, 1],
                    ["coin", 1, .5, 127, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 127, 0, 0, 0, 1, 1, 1],
                    ["coin", .5, .5, 130, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 116.6, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 133, 0, 0, 0, 1, 1, 1],
                    ["coin", 1, .5, 120.6, 0, 0, 0, 1, 1, 1],
                    ["coin", 1, .5, 133, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 137, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 137, 0, 0, 0, 1, 1, 1],
                    ["coin", -.5, .5, 140, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 143, 0, 0, 0, 1, 1, 1],
                    ["coin", 0, .5, 143, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 59, 0, 0, 0, 1, 1, 1],
                    ["coin", -.2, .5, 59, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 62, 0, 0, 0, 1, 1, 1],
                    ["coin", -.2, .5, 62, 0, 0, 0, 1, 1, 1],
                    ["coin", -1, .5, 65, 0, 0, 0, 1, 1, 1],
                    ["coin", -.2, .5, 65, 0, 0, 0, 1, 1, 1]
                ]
            ]
        ],
        A.lvConfigBgLength = [
            [9, 0, 0, 127, 0, 0, 0, 1, 1, 1],
            [12, 0, 0, 172, 0, 0, 0, 1, 1, 1],
            [11, 0, 0, 157, 0, 0, 0, 1, 1, 1],
            [16, 84.8, 0, 163.68, 0, 90, 0, 1, 1, 1],
            [16, -85, 0, 163.68, 0, -90, 0, 1, 1, 1],
            [13, 40, 0, 163.63, 0, 90, 0, 1, 1, 1],
            [14, 45.6, 0, 188.5, 0, 0, 0, 1, 1, 1],
            [18, -90.93, 0, 203.5, 0, 0, 0, 1, 1, 1],
            [16, -61.4, 0, 203.5, 0, 0, 0, 1, 1, 1],
            [15, -121.38, 0, 128.5, 0, 0, 0, 1, 1, 1],
            [15, 45.6, 0, 203.5, 0, 0, 0, 1, 1, 1],
            [16, -61.4, 0, 203.5, 0, 0, 0, 1, 1, 1],
            [15, -85, 0, 103.65, 0, -90, 0, 1, 1, 1],
            [11, 0, 0, 157, 0, 0, 0, 1, 1, 1]
        ],
        A.subLoadConfig = ["js", "SpikyCylinder", "Saw", "RotatingCylinder", "rongyan", "Pendulum", "dici", "blue", "blue_1", "green", "green_1", "green_2", "purple", "purple_1", "red", "red_1", "red_2", "red_3", "red_3 1", "yellow", "yellow_1", "yellow_2", "Star", "coin", "jt"],
        A.lvLoadConfig = ["cj2", "cj3", "cj4", "cj5", "cj6", "cj1", "paodao", "paodao_ys", "wan_zuo", "wan_you", "Boat_02", "Boat_01", "quan"],
        A.MatConfig = ["player.lmat", "player_blue.lmat", "player_green.lmat", "player_purple.lmat", "player_red.lmat", "player_yellow.lmat"];
    class E {
        constructor() {
            this.LoadPath1 = "res/3DScene/LayaScene_paodao/Conventional/", this.LoadPath2 = "res/3DScene/LayaScene_zujian/Conventional/",
                this.LoadPath3 = "res/3DScene/MianScene3d/Conventional/Assets/layashader/", this.x1Loading = 0,
                this.sloading1 = 0, this.sloading = 1, this.isTest = !1, this.sloading1 = 1 + .2 * A.lvLoadConfig.length,
                this.sloading1 = Number(this.sloading1.toFixed(1)), this.sloading = Number((this.sloading1 + .2 * A.subLoadConfig.length).toFixed(1)),
                this.isTest && (this.sloading = 1), Laya.Browser.onQQMiniGame, this.Init();
        }
        Init() {
            let e = this;
            x.Subcontract("MainScene", () => {}, () => {
                x.Subcontract("SubScene", () => {}, () => {
                    e.Awake();
                });
            });
        }
        Awake() {
            let e = this;
            _.DefaultPayerSKin = t.LocalStorage.GetStringItem("DefaultPayerSKin", _.DefaultPayerSKin),
                d.Instate.CurLevel = t.LocalStorage.GetIntItem("CurLevel", 1), d.Instate.todayWuchuTimes = t.LocalStorage.GetIntItemSameDay("TodayWuChuTimes", 0);
            let n = d.Instate.CurLevel % 5,
                a = Math.floor(d.Instate.CurLevel / 5);
            d.Instate.isRewardStep = !1, _.BuySkin = t.LocalStorage.GetObjectItem("BuySkin", _.BuySkin),
                t.LocalStorage.SetIntItem("CurLevel", d.Instate.CurLevel), p.Instate.RegisterOne("doNextLevel", Laya.Handler.create(this, this.doNextLevel));
            let i = function(n) {
                for (let a = 0; a < A.subLoadConfig.length; a++) {
                    let i = A.subLoadConfig[a];
                    t.Sprite3D.load(e.LoadPath2 + i + ".lh", Laya.Handler.create(null, () => {
                        e.x1Loading += Number(.2), e.x1Loading = Number(Math.round(10 * e.x1Loading) / 10),
                            e.updateLoading(), e.x1Loading >= e.sloading && e.Over(n);
                    }), new Laya.Handler(null, e => {}));
                }
            };
            e.isTest ? t.Scene3D.load("res/3DScene/LayaScene_guanka1/Conventional/guanka1.ls", Laya.Handler.create(null, t => {
                e.x1Loading = 1, e.updateLoading(), e.Over(t);
            }), new Laya.Handler(null, t => {
                e.x1Loading = Number(t), e.updateLoading();
            })) : t.Scene3D.load("res/3DScene/MianScene3d/Conventional/guanka1.ls", Laya.Handler.create(null, o => {
                if (e.x1Loading = 1, e.updateLoading(), 0 == n) d.Instate.isRewardStep = !0, d.Instate.LevelIndex = A.lvConfigSub.length;
                else if (1 != d.Instate.CurLevel) {
                    let e = d.Instate.CurLevel - a - 1;
                    e % (A.lvConfigSub.length - 2) == 0 ? d.Instate.LevelIndex = A.lvConfigSub.length - 1 : d.Instate.LevelIndex = e % (A.lvConfigSub.length - 2) + 1;
                } else d.Instate.LevelIndex = 1;
                v.Instate.Load(_.MusicConfig),
                    function(n) {
                        for (let a = 0; a < A.lvLoadConfig.length; a++) {
                            let o = A.lvLoadConfig[a];
                            t.Sprite3D.load(e.LoadPath1 + o + ".lh", Laya.Handler.create(null, () => {
                                e.x1Loading += Number(.2), e.updateLoading(), e.x1Loading >= e.sloading1 && (e.x1Loading = e.sloading1,
                                    i(n));
                            }), new Laya.Handler(null, e => {}));
                        }
                    }(o);
            }), new Laya.Handler(null, t => {
                e.x1Loading = Number(t), e.updateLoading();
            }));
        }
        Over(e) {
            if (Laya.stage.addChild(e), e.zOrder = -2, d.Instate.MainScene3D = e, this.isTest) {
                let e = [],
                    t = [],
                    n = d.Instate.MainScene3D.getChildByName("lv2").getChildByName("cj"),
                    a = d.Instate.MainScene3D.getChildByName("lv2").getChildByName("daoju");
                for (let t = 0; t < n.numChildren; t++) {
                    let a = n.getChildAt(t),
                        i = a.name,
                        o = a.transform.localPositionX,
                        s = a.transform.localPositionY,
                        l = a.transform.localPositionZ,
                        r = a.transform.localRotationEulerX,
                        d = a.transform.localRotationEulerY,
                        c = a.transform.localRotationEulerZ,
                        h = a.transform.localScaleX,
                        _ = a.transform.localScaleY,
                        p = a.transform.localScaleZ;
                    e[t] = [i, o, s, l, r, d, c, h, _, p], t == n.numChildren - 1 && console.log("pxl json paodao:" + JSON.stringify(e));
                }
                for (let e = 0; e < a.numChildren; e++) {
                    let n = a.getChildAt(e),
                        i = n.name,
                        o = n.transform.localPositionX,
                        s = n.transform.localPositionY,
                        l = n.transform.localPositionZ,
                        r = n.transform.localRotationEulerX,
                        d = n.transform.localRotationEulerY,
                        c = n.transform.localRotationEulerZ,
                        h = n.transform.localScaleX,
                        _ = n.transform.localScaleY,
                        p = n.transform.localScaleZ;
                    t[e] = [i, o, s, l, r, d, c, h, _, p], e == a.numChildren - 1 && console.log("pxl json shuiguo:" + JSON.stringify(t));
                }
                return;
            }
            d.Instate.directionLight = e.getChildByName("light").getChildByName("Directional Light"),
                this.initLevelConfig(), Laya.Browser.onMiniGame && (w.getInstance().isIphone() || this.OpenShadow());
            let t = e.getChildByName("personMain");
            d.Instate.Player = t.addComponent(C), p.Instate.RegisterOne("RegisterMouseDown", new Laya.Handler(this, this.RegisterMouseDown));
        }
        RegisterMouseDown() {
            let e = this;
            Laya.stage.off(Laya.Event.MOUSE_DOWN, e, e.MouseDown),
                Laya.timer.once(100, this, function() {
                    Laya.stage.on(Laya.Event.MOUSE_DOWN, e, e.MouseDown);
                });
        }
        MouseDown() {
            if (!d.Instate.isClosePlayerTouch) {
                if (d.Instate.isGameStart) {
                    d.Instate.isMainViewVisible && (Laya.timer.clear(this, this.restGameState),
                        Laya.timer.once(5e3, this, this.restGameState));
                } else {
                    platform.getInstance().showInterstitial(() => {
                        Laya.Dialog.closeAll(), d.Instate.isGameStart = !0, d.Instate.CurPlayTimes += 1;
                        let e = function() {
                            d.Instate.Player.touchRegister();
                        };
                        p.Instate.Distribute("main_ui_button_root", !1),
                            (d.Instate.CurLevel - 1) % 4 == 0 && !d.Instate.limitedSkin && d.Instate.CurLevel > 1 && "1" == m.Instante.loadCfg.zs_skin_push_switch2 ?
                            Laya.Dialog.open("Views/SMSMView.scene", !0, e) : (d.Instate.CurLevel - 1) % 2 == 0 && !d.Instate.limitedSkin &&
                            d.Instate.CurLevel > 1 && "1" == m.Instante.loadCfg.zs_skin_push_switch1 ? Laya.Dialog.open("Views/TryView.scene", !0, e) :
                            (d.Instate.Player.touchRegister()
                                // ,GetInstate(h).isDome = !0, GetInstate(h).mousexup = Laya.MouseManager.instance.mouseX,
                                // GetInstate(h).mouseyup = Laya.MouseManager.instance.mouseY
                            ),
                            p.Instate.Distribute("load_game_player", _.DefaultPayerSKin),
                            d.Instate.limitedSkin = !1;
                    });
                }
            }

        }
        restGameState() {
            d.Instate.isMainViewVisible && (d.Instate.isGameStart = !0);
        }
        OpenShadow() {
            d.Instate.directionLight.shadowMode = Laya.ShadowMode.SoftLow, d.Instate.directionLight.shadowDistance = 20,
                d.Instate.directionLight.shadowResolution = 750, d.Instate.directionLight.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades,
                d.Instate.directionLight.shadowNormalBias = 2;
        }
        doNextLevel() {
            let e = d.Instate.CurLevel % 5,
                t = Math.floor(d.Instate.CurLevel / 5);
            if (d.Instate.isRewardStep = !1, 0 == e) d.Instate.isRewardStep = !0, d.Instate.LevelIndex = A.lvConfigSub.length;
            else if (1 != d.Instate.CurLevel) {
                let e = d.Instate.CurLevel - t - 1;
                e % (A.lvConfigSub.length - 2) == 0 ? d.Instate.LevelIndex = A.lvConfigSub.length - 1 : d.Instate.LevelIndex = e % (A.lvConfigSub.length - 2) + 1;
            } else d.Instate.LevelIndex = 1;
            console.log("pxl real lv:", d.Instate.LevelIndex), d.Instate.level_currency = 0,
                d.Instate.GameState = s.READY, d.Instate.Level.removeSelf(), d.Instate.Level.destroy(),
                d.Instate.Level = null, d.Instate.js.removeSelf(), d.Instate.js.destroy(), d.Instate.js = null,
                d.Instate.Player.Reset(), this.initLevelConfig(), d.Instate.isGameStart = !1, p.Instate.Distribute("main_ui_button_root", !0),
                p.Instate.Distribute("main_ui_level_update", null);
        }
        updateLoading() {
            var e = this.x1Loading / this.sloading;
            p.Instate.Distribute("Loding", e);
        }
        initLevelConfig() {
            d.Instate.Level = new Laya.Sprite3D(), d.Instate.MainScene3D.addChild(d.Instate.Level);
            let e = A.lvConfigSub[d.Instate.LevelIndex - 1],
                t = e[0],
                n = e[1];
            for (let e = 0; e < t.length; e++) {
                let n = t[e],
                    a = this.getLvSubNode(n);
                d.Instate.Level.addChild(a);
            }
            for (let e = 0; e < n.length; e++) {
                let t = n[e],
                    a = this.getSubNode(t);
                d.Instate.Level.addChild(a);
            }
            this.initEndScene();
        }
        initEndScene() {
            let e = Laya.Loader.getRes(this.LoadPath2 + "js.lh").clone();
            e.name = "js", d.Instate.MainScene3D.addChild(e), d.Instate.js = d.Instate.MainScene3D.getChildByName("js");
            let t = A.lvConfigBgLength[d.Instate.LevelIndex - 1];
            d.Instate.js.transform.localPositionX = t[1], d.Instate.js.transform.localPositionY = t[2],
                d.Instate.js.transform.localPositionZ = t[3], d.Instate.js.transform.localRotationEulerX = t[4] || 0,
                d.Instate.js.transform.localRotationEulerY = t[5] || 0, d.Instate.js.transform.localRotationEulerZ = t[6] || 0,
                d.Instate.js.getChildByName("Blob").getComponent(Laya.Animator).speed = 0;
        }
        getSubNode(e) {
            let t = e[0];
            console.log("pxl getSubNode name:", t);
            let n = Laya.Loader.getRes(this.LoadPath2 + t + ".lh").clone();
            return n.transform.localPositionX = e[1] || 0, n.transform.localPositionY = e[2] || 0,
                n.transform.localPositionZ = e[3] || 0, n.transform.localRotationEulerX = e[4] || 0,
                n.transform.localRotationEulerY = e[5] || 0, n.transform.localRotationEulerZ = e[6] || 0,
                n.transform.localScaleX = e[7] || 1, n.transform.localScaleY = e[8] || 1, n.transform.localScaleZ = e[9] || 1,
                n;
        }
        getLvSubNode(e) {
            let t = e[0];
            console.log("pxl getLvSubNode name:", t);
            let n = Laya.Loader.getRes(this.LoadPath1 + t + ".lh").clone();
            return n.transform.localPositionX = e[1] || 0, n.transform.localPositionY = e[2] || 0,
                n.transform.localPositionZ = e[3] || 0, n.transform.localRotationEulerX = e[4] || 0,
                n.transform.localRotationEulerY = e[5] || 0, n.transform.localRotationEulerZ = e[6] || 0,
                n.transform.localScaleX = e[7] || 1, n.transform.localScaleY = e[8] || 1, n.transform.localScaleZ = e[9] || 1,
                n;
        }
    }
    class N extends e.Views.LodingViewUI {
        onAwake() {
            Laya.Browser.onMiniGame && w.getInstance().init(), 1 == t.LocalStorage.GetIntItem("ISNEWUSERGAME", 1) ? (d.Instate.isNewUser = !0,
                    b.reportEvent("loading_show_new", "")) : d.Instate.isNewUser = !1, b.reportEvent("loading_show", ""),
                d.Instate.GameState = s.READY, new E(), p.Instate.RegisterOne("Loding", new Laya.Handler(this, this.Update));
        }
        Update(e) {
            e >= 1 ? (e = 1, d.Instate.isNewUser && b.reportEvent("loading_end_new", ""), b.reportEvent("loading_end", ""),
                this.progress.value = e, p.Instate.ReMoveTypeAll("Loding"),
                platform.getInstance().yadstartup("Blob-Giant-3d", () => {
                    window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => {
                        e.stopPropagation();
                        platform.getInstance().navigate("GAME", "LOGO");
                    });
                    window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Blob-Giant-3D-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Blob-Giant-3D-musicState")) : false;
                    p.Instate.Distribute("PlayBG", "BG");
                    Laya.Scene.open("Views/StartView.scene");
                })
            ) : this.progress.value = e;
        }
        CreatorBanner() {}
    }
    class D extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            this.owner.on(Laya.Event.MOUSE_DOWN, this, function(e) {
                e.stopPropagation();
            });
        }
    }! function(e) {
        e.MathTool = class {
            static disruptedArray(e) {
                let t = e.length;
                for (let n = 0; n < t - 1; n++) {
                    let a = parseInt((Math.random() * (t - n)).toString()),
                        i = e[a];
                    e[a] = e[t - n - 1], e[t - n - 1] = i;
                }
                return e;
            }
            static creatNumberArray(e, t) {
                if (e >= t) return void console.error("min大于等于max");
                let n = new Array();
                e = Math.floor(e), t = Math.floor(t);
                for (let a = e; a < t + 1; a++) n.push(a);
                return n;
            }
            static getRandomNum(e, t) {
                return Math.random() * (t - e) + e;
            }
            static getRandomInt(e, t = 0) {
                return Math.floor(Math.random() * (e - t) + t);
            }
        };
    }(f || (f = {}));
    class M extends e.Views.MutualpushViewUI {
        constructor() {
            super(...arguments), this.arr1 = [], this.arr2 = [], this.sce = null, this.arr1I = 0,
                this.arr2I = 0, this.isUpdate = !1, this.randomIndex = -1;
        }
        onAwake() {
            d.Instate.isClosePlayerTouch = !0, w.getInstance().hideBanner();
            let e = [],
                t = [],
                n = [];
            m.Instante.AdCfg.promotion.sort(function() {
                return .5 - Math.random();
            });
            for (let e = 0; e < m.Instante.AdCfg.promotion.length; e++) - 1 == n.indexOf(m.Instante.AdCfg.promotion[e].app_title) && (n.push(m.Instante.AdCfg.promotion[e].app_title),
                t.push(m.Instante.AdCfg.promotion[e]));
            for (let n = 0; n < t.length; n++) {
                const a = t[n];
                e.push(a), this.arr1.push(a);
            }
            for (; e.length;) {
                let t = this.random(0, e.length);
                this.arr2.push(e[t]), e.splice(t, 1);
            }
            this.arr1I = f.MathTool.getRandomInt(this.arr1.length), this.arr2I = f.MathTool.getRandomInt(this.arr2.length),
                "2" == m.Instante.type ? (this.getChildByName("style2").visible = !1, this.getChildByName("style1").visible = !0,
                    this.Init1()) : (this.getChildByName("style2").visible = !0, this.getChildByName("style1").visible = !1,
                    this.Init2()), this.btn_Continue1.y = Laya.stage.height - 60;
        }
        random(e, t) {
            let n = t - e;
            return Math.floor(Math.random() * n + e);
        }
        Init1() {
            this.style1list2.height = Laya.stage.height - 620, this.SetList(this.style1list1, this.arr1, this.updateItem, this.onSelect),
                this.SetList(this.style1list2, this.arr2, this.updateItem1, this.onSelect1);
            let e = !1,
                t = this;
            if ("1" == m.Instante.loadCfg.zs_slide_jump_switch && this.style1list2.on(Laya.Event.MOUSE_MOVE, this, function() {
                    if (0 == e) {
                        e = !0;
                        let n = f.MathTool.getRandomInt(t.arr2.length);
                        t.onSelect(n);
                    }
                }), Laya.Browser.onMiniGame) {
                let e = this;
                1 == m.Instante.loadCfg.zs_banner_vertical_enable && 1 == m.Instante.loadCfg.zs_banner_city ? (console.log("打开了banner误触"),
                    e.btn_Continue1.on(Laya.Event.CLICK, null, () => {
                        e.btn_Continue1.offAll(), Laya.timer.once(m.Instante.loadCfg.zs_banner_banner_time, this, () => {
                            w.getInstance().showBannerNotCreat(0), Laya.timer.once(1e3 * Number(m.Instante.loadCfg.zs_banner_time), this, () => {
                                w.getInstance().hideBanner(), e.btn_Continue1.on(Laya.Event.CLICK, e, e.BtnReturn);
                            });
                        });
                    })) : (console.log("未打开banner误触"), e.btn_Continue1.y = Laya.stage.height - 300,
                    e.btn_Continue1.on(Laya.Event.CLICK, e, e.BtnReturn));
            } else {
                let e = this;
                1 == m.Instante.loadCfg.zs_banner_vertical_enable && 1 == m.Instante.loadCfg.zs_banner_city ? e.btn_Continue1.on(Laya.Event.CLICK, null, () => {
                    e.btn_Continue1.offAll(), Laya.timer.once(m.Instante.loadCfg.zs_banner_text_time, this, () => {
                        w.getInstance().hideBanner(), e.btn_Continue1.on(Laya.Event.CLICK, e, e.BtnReturn);
                    });
                }) : (e.btn_Continue1.y = Laya.stage.height - 300, e.btn_Continue1.on(Laya.Event.CLICK, e, e.BtnReturn));
            }
        }
        Init2() {
            this.btn_Continue2.pivot(this.btn_Continue2.width / 2, this.btn_Continue2.height / 2),
                this.btn_Continue2.x = Laya.stage.width / 2, this.style2list1.height = Laya.stage.height - 320,
                this.SetList(this.style2list1, this.arr1, this.updateItem1, this.onSelect1);
            let e = !1,
                t = this;
            if ("1" == m.Instante.loadCfg.zs_slide_jump_switch && this.style2list1.on(Laya.Event.MOUSE_MOVE, this, function() {
                    if (0 == e) {
                        e = !0;
                        let n = f.MathTool.getRandomInt(t.arr2.length);
                        t.onSelect1(n);
                    }
                }), Laya.Browser.onMiniGame) {
                let e = this;
                1 == m.Instante.loadCfg.zs_banner_vertical_enable && 1 == m.Instante.loadCfg.zs_banner_city ? (e.btn_Continue2.y = Laya.stage.height - 100,
                    e.btn_Continue2.on(Laya.Event.CLICK, null, () => {
                        e.btn_Continue2.offAll(), Laya.timer.once(m.Instante.loadCfg.zs_banner_banner_time, this, () => {
                            w.getInstance().showBannerNotCreat(1), Laya.timer.once(1e3 * Number(m.Instante.loadCfg.zs_banner_time), this, () => {
                                w.getInstance().hideBanner(), e.btn_Continue2.on(Laya.Event.CLICK, e, e.BtnReturn);
                            });
                        });
                    })) : (e.btn_Continue2.y = Laya.stage.height - 300, e.btn_Continue2.on(Laya.Event.CLICK, e, e.BtnReturn));
            } else {
                let e = this;
                1 == m.Instante.loadCfg.zs_banner_vertical_enable && 1 == m.Instante.loadCfg.zs_banner_city ? e.btn_Continue2.on(Laya.Event.CLICK, null, () => {
                    e.btn_Continue2.offAll(), Laya.timer.once(m.Instante.loadCfg.zs_banner_text_time, this, () => {
                        w.getInstance().hideBanner(), e.btn_Continue2.on(Laya.Event.CLICK, e, e.BtnReturn);
                    });
                }) : (e.btn_Continue2.y = Laya.stage.height - 300, e.btn_Continue2.on(Laya.Event.CLICK, e, e.BtnReturn));
            }
        }
        onOpened(e) {
            e && (this.sce = e[0], e[1] && (this.p = e[1]));
        }
        BtnReturn() {
            this.sce ? Laya.Scene.open(this.sce, !0, this.p) : this.close();
        }
        SetList(e, t, n, a) {
            e.scrollBar.hide = !0, e.array = t, e.renderHandler = new Laya.Handler(this, n),
                e.selectEnable = !0, e.selectHandler = new Laya.Handler(this, a), this.TweenTo(e, e.array.length - 1, 0, e.array.length - 1);
        }
        TweenTo(e, t, n, a) {
            let i = this,
                o = 2e4 * Math.round(a / 12);
            e.tweenTo(t, o, Laya.Handler.create(null, () => {})), t == a ? (t = n, o -= 1e4 * Math.round(a / 12)) : t = a,
                Laya.timer.once(o, this, () => {
                    i.TweenTo(e, t, n, a);
                });
        }
        updateItem(e, t) {
            e.getChildAt(0).getChildByName("icon").skin = this.arr1[t].app_icon;
        }
        updateItem1(e, t) {
            const n = e.getChildAt(0);
            n.getChildByName("icon").skin = this.arr2[t].app_icon, n.getChildByName("name").text = this.arr2[t].app_title.substring(0, 6),
                this.arr2I == t ? e.getChildAt(1).visible = !0 : e.getChildAt(1).visible = !1;
        }
        onSelect(e) {
            let t = this;
            if (console.log("选中", e), t.style1list1._selectedIndex = -1, t.style1list2._selectedIndex = -1,
                t.style2list1._selectedIndex = -1, 1 != this.isUpdate) {
                if (!(w.getInstance().openid.length < 2) && Laya.Browser.onMiniGame && e < this.arr1.length) {
                    let n = m.Instante.GetPromotion(m.Instante.GetPromotionIndex(this.arr1[e]));
                    zs.sdk.navigate2Mini(n, w.getInstance().openid, function() {
                        "2" == m.Instante.type ? n.appid && b.reportEventWXGame("hot", n.appid) : n.appid && b.reportEventWXGame("list", n.appid);
                    }, function() {}, function() {
                        t.randomIndex++, t.randomIndex == e && t.randomIndex++, t.randomIndex >= t.arr1.length && (t.randomIndex = 0),
                            t.arr1[e] = t.arr1[t.randomIndex], t.style1list1.updateArray(t.arr1), t.isUpdate = !0,
                            t.style1list1.selectedIndex = 1;
                    });
                }
            } else this.isUpdate = !1;
        }
        onSelect1(e) {
            let t = this;
            if (t.style1list1._selectedIndex = -1, t.style1list2._selectedIndex = -1, t.style2list1._selectedIndex = -1, !(w.getInstance().openid.length < 2))
                if (1 != this.isUpdate) {
                    if (Laya.Browser.onMiniGame && e < this.arr2.length) {
                        let n = m.Instante.GetPromotion(m.Instante.GetPromotionIndex(this.arr2[e]));
                        zs.sdk.navigate2Mini(n, w.getInstance().openid, function() {
                            "2" == m.Instante.type ? n.appid && b.reportEventWXGame("hot", n.appid) : n.appid && b.reportEventWXGame("list", n.appid);
                        }, function() {}, function() {
                            t.randomIndex++, t.randomIndex == e && t.randomIndex++, t.randomIndex >= t.arr2.length && (t.randomIndex = 0),
                                t.arr2[e] = t.arr2[t.randomIndex], t.style2list1.updateArray(t.arr2), t.isUpdate = !0,
                                "2" == m.Instante.type ? t.style1list2.selectedIndex = 1 : t.style2list1.selectedIndex = 1;
                        });
                    }
                } else this.isUpdate = !1;
        }
        onDisable() {
            Laya.timer.clearAll(this), d.Instate.isClosePlayerTouch = !1;
        }
    }
    class k extends Laya.Sprite {
        onAwake() {
            this.visible = !1, this.tween();
        }
        tween() {
            let e = this;
            Laya.Tween.to(this, {
                x: 76.5,
                y: 140.5
            }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                Laya.Tween.to(this, {
                    x: 104.5,
                    y: 167
                }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, function() {
                    e.tween();
                }));
            }));
        }
    }
    class P extends Laya.Script {
        constructor() {
            super(), this.zoom = !1, this.cdTag = !1;
        }
        onAwake() {
            this.owner.on(Laya.Event.MOUSE_DOWN, this, function(e) {
                e.stopPropagation();
            });
        }
        onMouseDown() {
            this.zoom && Laya.Tween.to(this.owner, {
                scaleX: .9,
                scaleY: .9
            }, 200);
        }
        onMouseUp() {
            p.Instate.Distribute("playSound", "CLICK"), this.zoom && Laya.Tween.to(this.owner, {
                scaleX: 1,
                scaleY: 1
            }, 200);
        }
        onMouseOut() {
            this.zoom && Laya.Tween.to(this.owner, {
                scaleX: 1,
                scaleY: 1
            }, 200);
        }
        setZoom(e) {
            this.zoom = e;
        }
        addEvent(e) {
            this.callback = e, this.owner.on(Laya.Event.CLICK, this, this.eventCall);
        }
        eventCall() {
            this.cdTag || (this.cdTag = !0, Laya.timer.once(500, this, function() {
                this.cdTag = !1;
            }), this.callback && this.callback());
        }
    }
    class O extends e.Views.SettlementViewUI {
        constructor() {
            super(...arguments), this.IsClickNext = !1, this.gameResult = !1;
        }
        onAwake() {
            Laya.Browser.onVVMiniGame && this.Desktop();
        }
        onOpened(e) {
            console.log("pxl Settlement - onOpened", e), Laya.Browser.onMiniGame && w.getInstance().hideBanner(),
                d.Instate.mengdianjindu = 0, this.gameResult = e, this.success.visible = e, this.failure.visible = !e,
                e ? (b.reportLevelEvent("end", d.Instate.CurLevel - 1), p.Instate.Distribute("playSound", "WIN")) : (b.reportLevelEvent("end1", d.Instate.CurLevel),
                    p.Instate.Distribute("playSound", "FAIL")), this.updateInfo(), d.Instate.isStartKuangdian = !1;
            platform.getInstance().initList(this.list_ListShow);
        }
        updateInfo() {
            this.gameResult ? (b.reportEvent("lv" + (d.Instate.CurLevel - 1) + "_win_show", ""),
                b.reportEvent("result_win_show", ""), this.Init()) : (b.reportEvent("lv" + d.Instate.CurLevel + "_lose_show", ""),
                b.reportEvent("result_lose_show", ""), this.Init1()), this.initLevel();
        }
        VideoJump() {
            this.Next();
        }
        VideoJump1() {
            let e = this;
            w.getInstance().showVideo(0, () => {
                e.IsClickNext || (e.CloseTween(), e.IsClickNext = !0, Laya.Scene.open("Views/StartView.scene"),
                    d.Instate.Player.receiveFunction());
            }, () => {});
        }
        Init1() {
            var e = this;
            if (this.btn_jump.getComponent(P).addEvent(function() {
                    b.reportEvent("result_loss_ad_click", ""), e.VideoJump1();
                }), this.btn_reset.getComponent(P).addEvent(function() {
                    b.reportEvent("result_loss_again_click", ""), e.VideoJump();
                }), this.btn_reset.visible = !0, 1 == m.Instante.loadCfg.zs_banner_vertical_enable && 1 == m.Instante.loadCfg.zs_banner_city) {
                let t = new Laya.Point(this.btn_reset.x, this.btn_reset.y),
                    n = new Laya.Point(305, Laya.stage.height - 100);
                this.btn_reset.parent.globalToLocal(n, !1), this.btn_reset.pos(t.x, n.y), this.btn_reset.offAll(),
                    Laya.timer.once(m.Instante.loadCfg.zs_banner_banner_time, this, () => {
                        w.getInstance().showBannerNotCreat(3);
                    }), Laya.timer.once(m.Instante.loadCfg.zs_banner_text_time, this, () => {
                        e.btn_reset.pos(t.x, t.y), e.btn_reset.on(Laya.Event.CLICK, e, e.VideoJump);
                    });
            }
        }
        VideoDouble() {
            let e = this;
            w.getInstance().showVideo(0, () => {
                d.Instate.currency += Math.floor(d.Instate.level_currency * d.Instate.levelDouble),
                    t.LocalStorage.SetIntItem("currency_localstorage", d.Instate.currency), p.Instate.Distribute("main_ui_currency_update", d.Instate.currency),
                    e.Next();
            }, () => {});
        }
        Init() {
            let e = this;
            if (this.btn_next.getComponent(P).addEvent(function() {
                    b.reportEvent("result_win_ad_click", ""), e.VideoDouble();
                }), this.btn_next1.getComponent(P).addEvent(function() {
                    b.reportEvent("result_win_get_click", ""), e.Next();
                }), this.btn_next1.visible = !0, d.Instate.currency += Math.floor(d.Instate.level_currency * (d.Instate.levelDouble - 1)),
                t.LocalStorage.SetIntItem("currency_localstorage", d.Instate.currency), p.Instate.Distribute("main_ui_currency_update", d.Instate.currency),
                this.fc_slzuanshi.value = "" + Math.floor(d.Instate.level_currency * d.Instate.levelDouble * 2),
                1 == m.Instante.loadCfg.zs_banner_vertical_enable && 1 == m.Instante.loadCfg.zs_banner_city) {
                let t = new Laya.Point(this.btn_next1.x, this.btn_next1.y),
                    n = new Laya.Point(305, Laya.stage.height - 100);
                this.btn_next1.parent.globalToLocal(n, !1), this.btn_next1.pos(t.x, n.y), this.btn_next1.offAll(),
                    Laya.timer.once(m.Instante.loadCfg.zs_banner_banner_time, this, () => {
                        w.getInstance().showBannerNotCreat(3);
                    }), Laya.timer.once(m.Instante.loadCfg.zs_banner_text_time, this, () => {
                        e.btn_next1.pos(t.x, t.y), e.btn_next1.on(Laya.Event.CLICK, e, e.Next);
                    });
            }
        }
        Next() {
            this.IsClickNext || (this.IsClickNext = !0, this.CloseTween(), GetInstate(h).Clear(),
                m.Instante.type = "2", Laya.Scene.open("Views/StartView.scene"),
                p.Instate.Distribute("doNextLevel", null));
        }
        CloseTween() {
            Laya.timer.clearAll(this), Laya.Tween.clearAll(this.btn_next);
        }
        initLevel() {
            d.Instate.currency >= 1e5 ? (this.fc_Diamond.scaleY = .8, this.fc_Diamond.scaleX = .8) : d.Instate.currency >= 1e4 ? (this.fc_Diamond.scaleY = .9,
                    this.fc_Diamond.scaleX = .9) : (this.fc_Diamond.scaleY = 1, this.fc_Diamond.scaleX = 1),
                this.fc_Diamond.value = "" + d.Instate.currency;
        }
        Desktop() {
            if (1 == d.Instate.setting.Lc_AutoAddDesk) d.Instate.CurPlayTimes % 5 == 1 && _.PutDesktopNum > 0 && _.PutDesktopNum--;
            else {}
        }
        Boxgame() {}
    }
    class B extends Laya.Script {
        constructor() {
            super(...arguments), this.isend = !1, this.index_ = 0, this.arr = [];
        }
        onAwake() {
            let e = [],
                t = [];
            m.Instante.AdCfg.promotion.sort(function() {
                return .5 - Math.random();
            });
            for (let n = 0; n < m.Instante.AdCfg.promotion.length; n++) - 1 == t.indexOf(m.Instante.AdCfg.promotion[n].app_title) && (t.push(m.Instante.AdCfg.promotion[n].app_title),
                e.push(m.Instante.AdCfg.promotion[n]));
            for (let t = 0; t < e.length; t++) {
                const e = m.Instante.AdCfg.promotion[t];
                this.arr.push(e);
            }
            this.arr.sort(() => .5 - Math.random()), this.TweenTo(), this.Update();
        }
        TweenTo() {
            for (let e = 0; e < this.owner.numChildren; e++) {
                const t = this.owner.getChildAt(e);
                let n = t.x;
                t.rotation = -45, t.x -= 500, Laya.Tween.to(t, {
                    x: n,
                    rotation: 0
                }, 500, Laya.Ease.linearNone), t.on(Laya.Event.CLICK, this, this.onSelect, [e]);
            }
        }
        Update() {
            let e = f.MathTool.getRandomInt(this.owner.numChildren);
            for (let t = 0; t < this.owner.numChildren; t++) {
                const n = this.owner.getChildAt(t);
                let a = this.index_ + t;
                a %= this.arr.length, n.getChildAt(0).getChildAt(0).skin = this.arr[a].app_icon,
                    n.getChildAt(1).getChildAt(0).text = this.arr[a].app_title, n.getChildAt(2).visible = e == t;
            }
            this.index_ += 4, Laya.timer.once(3e3, this, this.Update);
        }
        onSelect(e) {
            if (!(w.getInstance().openid.length < 2)) {
                if (Laya.Browser.onMiniGame && (e = this.index_ + e - 4, (e %= this.arr.length) < 0 && (e = 0),
                        e < this.arr.length)) {
                    let t = m.Instante.GetPromotion(m.Instante.GetPromotionIndex(this.arr[e]));
                    zs.sdk.navigate2Mini(t, w.getInstance().openid, function() {
                        t.appid && b.reportEventWXGame("result", t.appid);
                    }, function() {
                        m.Instante.type = "2";
                    }, function() {});
                }
            }
        }
    }
    class R extends e.Views.SignInDialogUI {
        constructor() {
            super(...arguments), this.dayindex = 0, this.skinBag = _.skinBag, this.coinType = _.signIn;
        }
        onAwake() {
            let e = this;
            Laya.Browser.onMiniGame && w.getInstance().showBannerNotCreat(3), b.reportEvent("qd_show", "");
            let n = Math.floor(Date.now() / 864e5),
                a = t.LocalStorage.GetObjectItem("SignIn", {
                    day: n - 1,
                    index: 0
                });
            this.dayindex = a.index, a.day == n || this.dayindex > 6 ? (this.btn_ordinary.visible = !1,
                this.btn_doublevideo.gray = !0, this.btn_doublevideo.x = .5 * Laya.stage.width) : (this.btn_doublevideo.getComponent(P).addEvent(function() {
                    e.Video();
                }), this.btn_ordinary.getComponent(P).addEvent(function() {
                    e.Ordinary();
                }), t.Button.BreathingScale(this.btn_doublevideo, 250, 250, this.btn_doublevideo, .9, .9),
                this.btn_ordinary.visible = !1, this.btn_close.visible = !1, Laya.timer.once(2e3, this, function() {
                    e.btn_ordinary.visible = !0, e.btn_close.visible = !0;
                })), this.Render(), this.btn_close.on(Laya.Event.CLICK, this, this.Close);
        }
        Close() {
            Laya.Dialog.close("Views/SignInDialog.scene");
        }
        Render() {
            let e = this.btn_close.parent.getChildAt(1);
            for (let t = 0; t < 6; t++) t < this.dayindex && (e.getChildAt(t).getChildAt(3).visible = !0),
                e.getChildAt(t).getChildAt(2).value = "x" + this.coinType[t].toString();
        }
        Video() {
            let e = this;
            b.reportEvent("qd_get_ad_click", ""), w.getInstance().showVideo(0, function() {
                b.reportEvent("qd_get_ad_success", ""), e.gotReward(!0);
            }, function() {});
        }
        Ordinary() {
            b.reportEvent("qd_get_click", ""), this.gotReward(!1);
        }
        gotReward(e) {
            var n = e ? 2 : 1;
            6 == this.dayindex && (this.view.OnEnable(), _.BuySkin[this.skinBag] = !0, t.LocalStorage.SetObjectItem("BuySkin", _.BuySkin)),
                d.Instate.currency += this.coinType[this.dayindex] * n, t.LocalStorage.SetIntItem("currency_localstorage", d.Instate.currency),
                p.Instate.Distribute("main_ui_currency_update", d.Instate.currency), this.view.FLy(),
                this.dayindex++;
            let a = Math.floor(Date.now() / 864e5);
            t.LocalStorage.SetObjectItem("SignIn", {
                day: a,
                index: this.dayindex
            }), this.Close();
        }
        onDisable() {
            Laya.Browser.onMiniGame && w.getInstance().hideBanner(), Laya.Tween.clearAll(this.btn_doublevideo);
        }
        onOpened(e) {
            this.view = e;
        }
    }
    class T extends e.Views.SkinViewUI {
        constructor() {
            super(...arguments), this.Startscene = null, this.playerskin = [];
        }
        onAwake() {
            b.reportEvent("skin_show", "");
            for (let e in _.PlayerSkinIcon) this.playerskin.push(e);
            this.currPlayerId = _.DefaultPayerSKin, _.BuySkin = t.LocalStorage.GetObjectItem("BuySkin", _.BuySkin),
                this.updateMyCurrency(), this.list_player.renderHandler = new Laya.Handler(this, this.UpdatePlayer),
                this.list_player.selectEnable = !0, this.list_player.selectHandler = new Laya.Handler(this, this.OnSelet),
                this.list_player.array = this.playerskin, Laya.stage.height < 1400 && (this.skinicon.parent.y += 100),
                this.btn_close.on(Laya.Event.CLICK, this, this.Close), this.skinicon.skin = _.PlayerModeIcon[_.DefaultPayerSKin];
            var e = this;
            this.btn_Price.getChildAt(0).value = _.PlayerSkinPrice.toFixed(0),
                this.btn_video.getComponent(P).addEvent(function() {
                    e.Video();
                }),
                this.btn_video.getChildAt(0).value = _.VideoSkinDiamonds.toFixed(0),
                this.btn_Price.getComponent(P).addEvent(function() {
                    e.Buy();
                }),
                this.btn_close.visible = !1,
                Laya.timer.once(2e3, this, function() {
                    e.btn_close.visible = !0;
                });
        }
        Video() {
            let e = this;
            b.reportEvent("skin_ad_click", ""), w.getInstance().showVideo(0, function() {
                b.reportEvent("skin_ad_success", ""), d.Instate.currency += _.VideoSkinDiamonds,
                    e.updateMyCurrency();
            }, function() {});
        }
        Close() {
            Laya.Scene.close("Views/SkinView.scene"), this.Startscene.visible = !0, this.Startscene.OnEnable(),
                this.currPlayerId != _.DefaultPayerSKin && p.Instate.Distribute("load_game_player", _.DefaultPayerSKin);
        }
        Buy() {
            if (this.list_player.visible) {
                if (b.reportEvent("skin_coin_click", ""), d.Instate.currency < _.PlayerSkinPrice) return b.reportEvent("skin_nocoin", ""),
                    void Laya.Dialog.open("Views/ToastDialog.scene", !0, "Coins Are Not Enough");
                let e = [];
                for (let t = 0; t < this.playerskin.length; t++) {
                    const n = this.playerskin[t];
                    n in _.BuySkin || e.push(n);
                }
                if (e.length > 0) {
                    b.reportEvent("skin_coin_success", "");
                    let n = t.HFMath.random(0, e.length);
                    _.BuySkin[e[n]] = !0, t.LocalStorage.SetObjectItem("BuySkin", _.BuySkin), _.DefaultPayerSKin = e[n],
                        this.list_player.refresh(), b.reportEvent("skin" + (6 - e.length) + "_success", ""),
                        d.Instate.currency -= _.PlayerSkinPrice, this.updateMyCurrency(), t.LocalStorage.SetStringItem("DefaultPayerSKin", _.DefaultPayerSKin);
                }
            }
        }
        updateMyCurrency() {
            d.Instate.currency >= 1e5 ? (this.fc_Diamond.scaleY = .8, this.fc_Diamond.scaleX = .8) : d.Instate.currency >= 1e4 ? (this.fc_Diamond.scaleY = .9,
                    this.fc_Diamond.scaleX = .9) : (this.fc_Diamond.scaleY = 1, this.fc_Diamond.scaleX = 1),
                this.fc_Diamond.value = "" + d.Instate.currency, t.LocalStorage.SetIntItem("currency_localstorage", d.Instate.currency),
                p.Instate.Distribute("main_ui_currency_update", d.Instate.currency);
        }
        UpdatePlayer(e, t) {
            if (e.getChildAt(0).getChildByName("icon").skin = _.PlayerSkinIcon[this.playerskin[t]],
                this.playerskin[t] in _.BuySkin) {
                e.getChildAt(0).getChildByName("lock").visible = !1;
            }
            if (this.playerskin[t] == _.DefaultPayerSKin) {
                e.getChildAt(0).getChildByName("choice").visible = !0;
            } else {
                e.getChildAt(0).getChildByName("choice").visible = !1;
            }
        }
        onOpened(e) {
            this.Startscene = e, this.Startscene.visible = !1;
        }
        OnSelet(e) {
            this.skinicon.skin = _.PlayerModeIcon[this.playerskin[e]], this.playerskin[e] in _.BuySkin && (_.DefaultPayerSKin = this.playerskin[e],
                t.LocalStorage.SetStringItem("DefaultPayerSKin", _.DefaultPayerSKin));
        }
    }
    class V extends Laya.Script {
        constructor() {
            super();
        }
        onEnable() {
            switch (this.type) {
                case "top":
                    this.Top();
                    break;

                case "bottom":
                    this.Bottom();
                    break;

                case "left":
                    this.Left();
                    break;

                case "right":
                    this.Right();
                    break;

                case "centre":
                    this.Centre();
            }
        }
        Top() {
            this.owner.y = this.value;
        }
        Bottom() {
            this.owner.y = Laya.stage.height - this.value;
        }
        Left() {
            this.owner.x = this.value;
        }
        Right() {
            this.owner.x = Laya.stage.width - this.value;
        }
        Centre() {
            this.owner.y = .5 * Laya.stage.height - this.value;
        }
        onDisable() {}
    }
    class H extends e.Views.SMSMViewUI {
        constructor() {
            super(...arguments), this.skinID = 1001, this.playerskin = [], this.closecallback = null;
        }
        onAwake() {
            b.reportEvent("skin_gift_show", ""), this.initTyrSkin(), Laya.Browser.onMiniGame && w.getInstance().showBannerNotCreat(3);
        }
        onOpened(e) {
            this.closecallback = e, this.btn_video.on(Laya.Event.CLICK, this, this.onVideoClick),
                this.btn_exit.on(Laya.Event.CLICK, this, this.onExitClick);
        }
        initTyrSkin() {
            for (let e in _.PlayerSkinIcon) e != _.DefaultPayerSKin && this.playerskin.push(e);
            let e = parseInt((Math.random() * (this.playerskin.length - 1)).toString());
            this.skinID = this.playerskin[e];
        }
        onExitClick() {
            Laya.Dialog.close("Views/SMSMView.scene");
        }
        onVideoClick() {
            var e = this;
            b.reportEvent("skin_gift_ad_click", "");
            w.getInstance().showVideo(0, function() {
                b.reportEvent("skin_gift_ad_success", ""), p.Instate.Distribute("load_game_player", e.skinID),
                    Laya.Dialog.close("Views/SMSMView.scene");
            }, function() {});
        }
        onDisable() {
            this.closecallback && "function" == typeof this.closecallback && this.closecallback(),
                Laya.Browser.onMiniGame && w.getInstance().hideBanner();
        }
    }
    class G extends e.Views.StartViewUI {
        constructor() {
            super(...arguments), this.levelLength = 0, this.hasShowBanner = !1, this.dropSpeed = .005,
                this.addSpeed = .1, this.startDropTimer = !1;
        }
        onAwake() {
            this.Init(), Laya.timer.clear(this, this.onUpdate),
                p.Instate.RegisterOne("main_ui_button_root", new Laya.Handler(this, this.buttonVisible)),
                p.Instate.RegisterOne("main_ui_end_root", new Laya.Handler(this, this.endVisible)),
                p.Instate.RegisterOne("main_ui_currency_update", new Laya.Handler(this, this.updateCurrency)),
                p.Instate.RegisterOne("main_ui_level_update", new Laya.Handler(this, this.initLevel)),
                p.Instate.RegisterOne("main_ui_refresh_xianding", new Laya.Handler(this, this.refreshXian)),
                p.Instate.RegisterOne("main_ui_progress_start", new Laya.Handler(this, this.startProgress)),
                p.Instate.RegisterOne("main_ui_bannerClean", new Laya.Handler(this, this.bannerClean)),
                this.coin.on(Laya.Event.COMPLETE, this, this.animComplete);
            Laya.timer.frameLoop(2, this, this.onUpdate);
            this.btn_musicState.skin = window.WebAudioEngine.pause ? "start/btn_sound_off.png" : "start/btn_sound_on.png";
            this.btn_musicState.on(Laya.Event.CLICK, this, this.changMusic);
        }
        changMusic() {
            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
            this.btn_musicState.skin = window.WebAudioEngine.pause ? "start/btn_sound_off.png" : "start/btn_sound_on.png";
            Laya.LocalStorage.setItem("Blob-Giant-3D-musicState", JSON.stringify(window.WebAudioEngine.pause));
        }
        Init() {
            var e = this;
            d.Instate.isMainViewVisible = !0, d.Instate.currency = t.LocalStorage.GetIntItem("currency_localstorage", 0),
                d.Instate.curGoldLv = t.LocalStorage.GetIntItem("curGoldLv_localstorage", 0), d.Instate.curAttackHurtLv = t.LocalStorage.GetIntItem("curAttackHurt_localstorage", 0),
                d.Instate.curGoldMult += .04 * d.Instate.curGoldLv, d.Instate.curAttackHurtMult += .1 * d.Instate.curAttackHurtLv,
                this.btn_shop.on(Laya.Event.CLICK, this, this.Shop), this.btn_turntable.on(Laya.Event.CLICK, this, this.ShowTurn),
                this.btn_Signin.getComponent(P).addEvent(function() {
                    e.Signin();
                }), this.goldNode_yc.on(Laya.Event.CLICK, this, this.doGoldUpgrade),
                this.boxAddBrick.on(Laya.Event.CLICK, this, this.updateProgress)
            // this.btnAddBrick1.on(Laya.Event.CLICK, this, this.updateProgress)
            let n = [];
            for (let e in _.PlayerSkinIcon) e in _.BuySkin || n.push(e);
            if (0 == m.Instante.loadCfg.zs_switch ? this.xianding_root.visible = !1 : this.xianding_root.visible = n.length > 0,
                this.btn_xianding.getComponent(P).addEvent(function() {
                    e.xiandingCall();
                }), this.endVisible(!1), this.updateCurrency(!0), this.initLevel(), d.Instate.isNewUser) t.LocalStorage.SetIntItem("ISNEWUSERGAME", 2),
                d.Instate.isNewUser = !1, b.reportEvent("hall_show_new", ""), p.Instate.Distribute("RegisterMouseDown", null);
            else {
                let e = Math.floor(Date.now() / 864e5),
                    n = t.LocalStorage.GetObjectItem("SignIn", {
                        day: e - 1,
                        index: 0
                    });
                d.Instate.isFirstEnterIn && (d.Instate.isFirstEnterIn = !1, p.Instate.Distribute("RegisterMouseDown", null)), n.day != e && n.index >= 7 && (this.btn_Signin.visible = !1);
            }
            b.reportEvent("hall_show", ""), this.btn_addjiazhuo.visible = !1;
        }
        Boxgame() {}
        ShowTurn() {
            b.reportEvent("hall_zp_click", ""), Laya.Dialog.open("Views/TurntableDialog.scene", !1, this);
        }
        Signin() {
            b.reportEvent("hall_qd_click", ""), Laya.Dialog.open("Views/SignInDialog.scene", !1, this);
        }
        MoreGame() {
            m.Instante.type = "2";
        }
        xiandingCall() {
            b.reportEvent("hall_skin3_click", "");
            let e = [];
            for (let t in _.PlayerSkinIcon) t in _.BuySkin || e.push(t);
            e.length > 0 ? Laya.Dialog.open("Views/TrySkinView.scene", !1, e[0]) : this.xianding_root.visible = !1;
        }
        refreshXian() {
            let e = [];
            for (let t in _.PlayerSkinIcon) t in _.BuySkin || e.push(t);
            e.length > 0 ? this.xianding_root.visible = !0 : this.xianding_root.visible = !1;
        }
        FLy() {
            this.coin_root.visible = !0, this.coin.play();
        }
        animComplete() {
            this.coin_root.visible = !1;
        }
        Shop(e) {
            b.reportEvent("hall_skin_click", ""), e.stopPropagation(), Laya.Scene.open("Views/SkinView.scene", !1, this);
        }
        buttonVisible(e) {
            d.Instate.isMainViewVisible = e, this.btn_root.visible = e, this.guide_root.visible = e,
                this.levelNode.visible = e, this.levelNode1.visible = !e
        }
        updateCurrency(e = !1) {
            console.log("pxl updateCurrency:", d.Instate.currency), d.Instate.currency >= 1e5 ? (this.fc_Diamond.scaleY = .8,
                    this.fc_Diamond.scaleX = .8) : d.Instate.currency >= 1e4 ? (this.fc_Diamond.scaleY = .9,
                    this.fc_Diamond.scaleX = .9) : (this.fc_Diamond.scaleY = 1, this.fc_Diamond.scaleX = 1),
                this.fc_Diamond.value = "" + d.Instate.currency, d.Instate.isMainViewVisible && this.refreshYcNode(e);
        }
        endVisible(e) {
            this.end_root.visible = e, this.btnAddForce.visible = e, this.btnAddBrick.visible = e;
        }
        initLevel() {
            this.leveltext.value = "" + d.Instate.CurLevel, this.levelMask.scaleX = 0, this.leveljindu.x = 0,
                this.levelLength = 15 * A.lvConfigBgLength[d.Instate.LevelIndex - 1][0] - 8, console.log("pxl startview initlevel length:", this.levelLength),
                this.updateLevel();
        }
        updateLevel() {
            let e = t.LocalStorage.GetIntItem("CurLevel", 1),
                n = e % 5,
                a = this.levelNode.getChildByName("level1"),
                i = this.levelNode.getChildByName("level2"),
                o = this.levelNode.getChildByName("level3"),
                s = this.levelNode.getChildByName("level4"),
                l = function(e, t, n, a) {
                    e.getChildByName("ok").visible = t, e.getChildByName("lvlabel").skin = t ? "start/dt_guank1_z.png" : "start/dt_guank2_z.png",
                        e.getChildByName("lvlabel").value = "" + n, e.getChildByName("jindu").visible = a;
                };
            0 == n ? (l(a, !0, e - 4, !0), l(i, !0, e - 3, !0), l(o, !0, e - 2, !0), l(s, !0, e - 1, !0)) : 1 == n ? (l(a, !0, e, !1),
                l(i, !1, e + 1, !1), l(o, !1, e + 2, !1), l(s, !1, e + 3, !1)) : 2 == n ? (l(a, !0, e - 1, !0),
                l(i, !0, e, !1), l(o, !1, e + 1, !1), l(s, !1, e + 2, !1)) : 3 == n ? (l(a, !0, e - 2, !0),
                l(i, !0, e - 1, !0), l(o, !0, e, !1), l(s, !1, e + 1, !1)) : 4 == n && (l(a, !0, e - 3, !0),
                l(i, !0, e - 2, !0), l(o, !0, e - 1, !0), l(s, !0, e, !1));
        }
        updateProgress() {
            this.forceMask.scaleY + this.addSpeed >= 1 ? this.forceMask.scaleY = 1 : this.forceMask.scaleY += this.addSpeed,
                d.Instate.mengdianjindu = this.forceMask.scaleY, 1 != m.Instante.loadCfg.zs_banner_city ||
                d.Instate.mengdianjindu > JSON.parse(m.Instante.loadCfg.zs_click_award_percent)[0] &&
                d.Instate.mengdianjindu < JSON.parse(m.Instante.loadCfg.zs_click_award_percent)[1] &&
                (m.Instante.getLastCanWuchu() && (d.Instate.todayWuchuTimes += 1,
                    t.LocalStorage.SetIntItemSameDay("TodayWuChuTimes", d.Instate.todayWuchuTimes)));
        }
        startProgress(e) {
            this.clearDropTimer(), this.addSpeed = Number(m.Instante.loadCfg.zs_click_award_add),
                this.dropSpeed = Number(m.Instante.loadCfg.zs_click_award_back), e && (this.startDropTimer = !0,
                    Laya.timer.loop(16.7, this, this.drop));
        }
        drop() {
            this.forceMask.scaleY > 0 && (this.forceMask.scaleY > this.dropSpeed ? this.forceMask.scaleY -= this.dropSpeed : this.forceMask.scaleY = 0,
                console.log("pxl jindu ---:", this.forceMask.scaleY), d.Instate.mengdianjindu = this.forceMask.scaleY);
        }
        onDisable() {
            Laya.timer.clear(this, this.onUpdate);
        }
        onUpdate() {
            d.Instate.GameState == s.PLAY && (this.levelMask.scaleX = d.Instate.Player.curMoveLength / this.levelLength,
                this.levelMask.scaleX > 1 && (this.levelMask.scaleX = 1), this.leveljindu.x = 389 * this.levelMask.scaleX);
        }
        clearDropTimer() {
            this.startDropTimer && (Laya.timer.clear(this, this.drop), this.startDropTimer = !1);
        }
        OnEnable() {}
        doGoldUpgrade() {
            let e = this;
            b.reportEvent("hall_coin_click", "");
            var n = function() {
                d.Instate.curGoldLv += 1, b.reportEvent("hall_coin_lv" + d.Instate.curGoldLv, ""),
                    t.LocalStorage.SetIntItem("curGoldLv_localstorage", d.Instate.curGoldLv), d.Instate.curGoldMult += .04,
                    d.Instate.Player.upGradeTime(), e.updateCurrency();
            };
            d.Instate.currency < 600 + 800 * d.Instate.curGoldLv ? 0 == m.Instante.loadCfg.zs_switch ? Laya.Dialog.open("Views/ToastDialog.scene", !1, "Coins Are Not Enough") : (w.getInstance().showVideo(0, n, function() {}),
                b.reportEvent("hall_coin_ad_click", "")) : (d.Instate.currency -= 600 + 800 * d.Instate.curGoldLv,
                t.LocalStorage.SetIntItem("currency_localstorage", d.Instate.currency), n());
        }
        refreshYcNode(e) {
            d.Instate.currency < 600 + 800 * d.Instate.curGoldLv ? 0 == m.Instante.loadCfg.zs_switch ? (this.goldNode_yc.getChildByName("money_price").visible = !0,
                    this.goldNode_yc.getChildByName("videoicon").visible = !1, this.goldNode_yc.getChildByName("shouzhi").visible = !1) : (this.goldNode_yc.getChildByName("money_price").visible = !1,
                    this.goldNode_yc.getChildByName("videoicon").visible = !0, this.goldNode_yc.getChildByName("shouzhi").visible = !1) : (this.goldNode_yc.getChildByName("money_price").visible = !0,
                    this.goldNode_yc.getChildByName("videoicon").visible = !1, this.goldNode_yc.getChildByName("shouzhi").visible = !0),
                this.goldNode_yc.getChildByName("money_price").value = 600 + 800 * d.Instate.curGoldLv + "",
                this.goldNode_yc.getChildByName("upNum").value = d.Instate.curGoldLv + 1 + "";
        }
        showBanner() {

        }
        bannerClean() {

        }
    }
    class j extends Laya.Script {
        constructor() {
            super(), this.goldnumnode = 0, this.gameObject = null, this.AutoDestroy = !1, this.CallBack = null,
                this.AddGoldMax = 0,
                function(e, t) {
                    let n = e.name;
                    r[n] = t;
                }(j, this);
        }
        onAwake() {
            this.gameObject = this.owner, p.Instate.RegisterOne("FlyGoldManage", Laya.Handler.create(this, this.PlayTween)),
                p.Instate.RegisterOne("RemoveAllFlyGoldManage", Laya.Handler.create(this, this.RemoveAll)),
                j.Instate = this;
        }
        onDestroy() {
            p.Instate.ReMoveTypeAll("FlyGoldManage"), p.Instate.ReMoveTypeAll("RemoveAllFlyGoldManage"),
                j.Instate = null;
        }
        onEnable() {}
        PlayTween(e, n, a, i = 10, o = 20, s = 300, l, r = "start/18_ks_jdpk.png") {
            0 == this.gameObject.visible && (this.gameObject.visible = !0);
            for (let d = 0; d < i; d++) {
                this.Register();
                let i = this;
                Laya.timer.once(t.HFMath.random(s, 3 * s), this, () => {
                    let d = this.Creator();
                    d.skin = r, d.pos(e.x + t.HFMath.random(0, 2 * o) - o, e.y + t.HFMath.random(0, 2 * o) - o),
                        Laya.Tween.to(d, {
                            x: n.x,
                            y: n.y,
                            scaleX: a.x,
                            scaleY: a.y,
                            visible: !1
                        }, 2 * s, null, Laya.Handler.create(this, () => {
                            d.visible = !1, this.Remove(), l && l(), i.CallBack && i.CallBack.method.call(i.CallBack.caller);
                        }), s);
                });
            }
            let d = this;
            d.AutoDestroy && Laya.timer.once(7 * s, this, () => {
                d.owner.destroy(!0);
            });
        }
        Register() {
            this.goldnumnode++;
        }
        RemoveAll() {
            for (let e = 0; e < this.gameObject.numChildren; e++) {
                const t = this.gameObject.getChildAt(e);
                Laya.Tween.clearAll(t), t.visible = !1, Laya.timer.clearAll(t), t.scaleX = 1, t.scaleY = 1;
            }
            this.goldnumnode = 0, this.gameObject.visible = !1;
        }
        Remove() {
            this.goldnumnode--, this.goldnumnode <= 0 && (this.gameObject.visible = !1);
        }
        Creator() {
            for (let e = 0; e < this.gameObject.numChildren; e++) {
                const t = this.gameObject.getChildAt(e);
                if (0 == t.visible) return t.visible = !0, t;
            }
            let e = new Laya.Image(this.gameObject.getChildAt(0).skin);
            return this.gameObject.addChild(e), e;
        }
        onDisable() {}
    }
    j.Instate = null;
    class z extends Laya.Script {
        onAwake() {
            this.btn = this.owner, this.owner.on(Laya.Event.MOUSE_DOWN, this, function(e) {
                e.stopPropagation();
            });
        }
        onMouseDown() {
            Laya.Tween.to(this.btn, {
                scaleX: .8,
                scaleY: .8
            }, 100, Laya.Ease.quartOut, Laya.Handler.create(this, function() {}));
        }
        onMouseUp() {
            Laya.Tween.to(this.btn, {
                scaleX: 1,
                scaleY: 1
            }, 100, Laya.Ease.quartOut, Laya.Handler.create(this, function() {}));
        }
        onMouseOut() {
            Laya.Tween.to(this.btn, {
                scaleX: 1,
                scaleY: 1
            }, 100, Laya.Ease.quartOut, Laya.Handler.create(this, function() {}));
        }
    }
    class U extends Laya.Script {
        constructor() {
            super(...arguments), this.arr = [], this.index_ = 0, this.frequency = 0;
        }
        onAwake() {
            for (let e = 0; e < m.Instante.AdCfg.promotion.length; e++) {
                const t = m.Instante.AdCfg.promotion[e];
                this.arr.push(t);
            }
            this.arr.sort(() => .5 - Math.random()), this.Tween(), this.Replace(), this.owner.on(Laya.Event.CLICK, this, this.Button),
                this.arr.length <= 0 && (this.owner.visible = !1);
        }
        Button() {

        }
        Replace() {
            Laya.timer.once(3e3, this, this.Replace), this.index_++, this.index_ >= this.arr.length && (this.index_ = 0)
        }
        onDestroy() {
            Laya.timer.clearAll(this), Laya.Tween.clearAll(this.owner);
        }
        onDisable() {
            Laya.timer.clearAll(this), Laya.Tween.clearAll(this.owner);
        }
        Tween() {
            Laya.Tween.clearAll(this.owner);
            let e = this;
            Laya.Tween.to(this.owner, {
                scaleX: .7,
                scaleY: .7
            }, 500, null, Laya.Handler.create(null, () => {
                let t = 1,
                    n = 500;
                (e.frequency + 1) % 2 == 0 && (t = .5, n = 250), Laya.Tween.to(this.owner, {
                    scaleX: 1,
                    scaleY: 1
                }, n, null, Laya.Handler.create(null, () => {
                    e.frequency++, e.frequency % 2 == 0 ? Laya.timer.once(1e3, e, e.Tween) : e.Tween();
                }));
            }));
        }
    }
    class Y extends Laya.Script {
        constructor() {
            super(...arguments), this.List = null, this.data = [];
        }
        onAwake() {
            this.List = this.owner.getChildAt(1), this.List.scrollBar.hide = !0, this.List.scrollBar.hide = !0,
                m.Instante.AdCfg.promotion.sort(function() {
                    return .5 - Math.random();
                });
            let e = [];
            for (let t = 0; t < m.Instante.AdCfg.promotion.length; t++) - 1 == e.indexOf(m.Instante.AdCfg.promotion[t].app_title) && (e.push(m.Instante.AdCfg.promotion[t].app_title),
                this.data.push(m.Instante.AdCfg.promotion[t]));
            this.List.array = this.data, this.List.renderHandler = new Laya.Handler(this, this.updateItem),
                this.List.selectEnable = !0, this.List.selectHandler = new Laya.Handler(this, this.onSelect),
                this.TweenTo(this.List, this.List.array.length - 1, 0, this.List.array.length - 1);
        }
        TweenTo(e, t, n, a) {
            let i = this,
                o = 2e4 * Math.round(a / 12);
            e.tweenTo(t, o, Laya.Handler.create(null, () => {})), t == a ? (t = n, o -= 1e4 * Math.round(a / 12)) : t = a,
                Laya.timer.once(o, null, () => {
                    i.TweenTo(e, t, n, a);
                });
        }
        updateItem(e, t) {
            e.getChildAt(0).getChildByName("icon").skin = this.data[t].app_icon;
        }
        onSelect(e) {
            if (!(w.getInstance().openid.length < 2) && Laya.Browser.onMiniGame) {
                if (this.List._selectedIndex = -1, e < this.data.length) {
                    let t = m.Instante.GetPromotion(m.Instante.GetPromotionIndex(this.data[e]));
                    zs.sdk.navigate2Mini(t, w.getInstance().openid, function() {
                        t.appid && b.reportEventWXGame("banenr", t.appid);
                    }, function() {
                        m.Instante.type = "2";
                    }, function() {});
                }
            }
        }
    }
    class W extends Laya.Script {
        constructor() {
            super(...arguments), this.isOpenBanner = !0, this.List = null, this.data = [];
        }
        onAwake() {
            if ("0" == m.Instante.loadCfg.zs_auto_pop_ups_switch || 0 == m.Instante.loadCfg.zs_switch) return void(this.owner.visible = !1);
            this.bg = this.owner.getChildAt(0), this.pl_side = this.owner.getChildByName("pl_side"),
                this.bg.visible = !1, this.bg.on(Laya.Event.CLICK, this, this.onOpen), this.btn_openside = this.owner.getChildByName("btn_openside"),
                this.btn_openside.on(Laya.Event.CLICK, this, this.onOpen), this.List = this.owner.getChildByName("pl_side").getChildAt(1),
                this.List.scrollBar.hide = !0, this.List.scrollBar.hide = !0, this.bannerView = this.owner.getChildByName("MutualbannerView"),
                this.bannerView.visible = !1;
            let e = [];
            m.Instante.AdCfg.promotion.sort(function() {
                return .5 - Math.random();
            });
            for (let t = 0; t < m.Instante.AdCfg.promotion.length; t++) - 1 == e.indexOf(m.Instante.AdCfg.promotion[t].app_title) && (e.push(m.Instante.AdCfg.promotion[t].app_title),
                this.data.push(m.Instante.AdCfg.promotion[t]));
            this.List.array = this.data, this.List.renderHandler = new Laya.Handler(this, this.updateItem),
                this.List.selectEnable = !0, this.List.selectHandler = new Laya.Handler(this, this.onSelect),
                this.TweenTo(this.List, this.List.array.length - 1, 0, this.List.array.length - 1);
        }
        onStart() {
            if ("0" == m.Instante.loadCfg.zs_auto_pop_ups_switch || 0 == m.Instante.loadCfg.zs_switch) return void(this.owner.visible = !1);
            Laya.LocalStorage.getItem("newUser") ? m.Instante.first && (m.Instante.first = !1,
                this.onOpen()) : (Laya.LocalStorage.setItem("newUser", "true"), m.Instante.first = !1);
        }
        onOpen() {
            if ("0" == m.Instante.loadCfg.zs_auto_pop_ups_switch || 0 == m.Instante.loadCfg.zs_switch) return void(this.owner.visible = !1);
            let e = this;
            if (0 == this.pl_side.x) d.Instate.isClosePlayerTouch = !0, Laya.Tween.to(this.pl_side, {
                    x: 607,
                    update: new Laya.Handler(this, function() {
                        e.btn_openside.x = e.pl_side.x + 589;
                    })
                }, 250, Laya.Ease.linearNone), this.btn_openside.loadImage("mutualpush/index-arrow2.png"),
                this.bg.visible = !0, this.List.visible = !0, this.bannerView.visible = !0, e.isOpenBanner && w.getInstance().showBannerNotCreat();
            else if (0 != this.pl_side.x) {
                d.Instate.isClosePlayerTouch = !1;
                let e = this;
                Laya.Tween.to(this.pl_side, {
                        x: 0,
                        update: new Laya.Handler(this, function() {
                            e.btn_openside.x = e.pl_side.x + 589;
                        })
                    }, 250, Laya.Ease.linearNone, Laya.Handler.create(null, () => {
                        e.List.visible = !1;
                    })), this.btn_openside.loadImage("mutualpush/index-arrow3.png"), this.bg.visible = !1,
                    this.bannerView.visible = !1, e.isOpenBanner && w.getInstance().hideBanner();
            }
        }
        TweenTo(e, t, n, a) {
            let i = this,
                o = 2e4 * Math.round(a / 12);
            e.tweenTo(t, o, Laya.Handler.create(null, () => {})), t == a ? (t = n, o -= 1e4 * Math.round(a / 12)) : t = a,
                Laya.timer.once(o, null, () => {
                    i.TweenTo(e, t, n, a);
                });
        }
        updateItem(e, t) {
            e.getChildAt(0).skin = this.data[t].app_icon;
            let n = t % 10;
            0 == n && (n = 1), e.getChildAt(1).skin = "mutualpush/" + n.toString() + "_.png",
                e.getChildAt(2).text = this.data[t].app_title;
        }
        onSelect(e) {
            let t = this,
                n = f.MathTool.getRandomInt(t.data.length);
            if (t.data[e] = t.data[n], t.List.updateArray(t.data), !(w.getInstance().openid.length < 2) && Laya.Browser.onMiniGame && e < m.Instante.AdCfg.promotion.length) {
                let n = m.Instante.GetPromotion(m.Instante.GetPromotionIndex(this.data[e]));
                zs.sdk.navigate2Mini(n, w.getInstance().openid, function() {
                    t.List._selectedIndex = -1, n.appid && b.reportEventWXGame("Side", n.appid);
                }, function() {
                    t.List._selectedIndex = -1, Laya.Scene.open("View/MutualpushView.scene", !1, [!1, ""]);
                }, function() {});
            }
        }
    }
    class X extends Laya.Script {
        onAwake() {
            0 != m.Instante.loadCfg.zs_history_list_jump && 0 != m.Instante.loadCfg.zs_switch || (this.owner.visible = !1);
        }
        onClick(e) {
            m.Instante.type = "2";
        }
    }
    class F extends e.Views.ToastDialogUI {
        constructor() {
            super();
        }
        onOpened(e) {
            this.message.text = e, Laya.timer.once(1e3, this, function() {
                Laya.Dialog.close("Views/ToastDialog.scene");
            });
        }
    }
    class q extends e.Views.TrySkinViewUI {
        constructor() {
            super(...arguments), this.videoNum = 0;
        }
        onAwake() {
            let e = this;
            b.reportEvent("skin3_show", ""), this.videoNum = t.LocalStorage.GetIntItem("videoNum", 0),
                this.btn_exit.on(Laya.Event.CLICK, this, this.onExitClick), this.btn_video.on(Laya.Event.CLICK, this, this.onVideoClick),
                this.btn_lingqu.on(Laya.Event.CLICK, this, this.onLingqu), this.updateJindu(), this.btn_exit.visible = !1,
                Laya.timer.once(2e3, this, function() {
                    e.btn_exit.visible = !0;
                }), Laya.Browser.onMiniGame && w.getInstance().showBannerNotCreat(3);
        }
        onOpened(e) {
            this.skinId = e, this.skinSp.skin = _.PlayerModeIcon[this.skinId];
        }
        updateJindu() {
            this.sp_yilingqu.visible = !1, this.btn_lingqu.visible = !1, this.progress.value = this.videoNum / 3,
                this.jindu.value = this.videoNum + "/3", 3 == this.videoNum && (b.reportEvent("skin3_get_show", ""),
                    this.btn_video.visible = !1, this.btn_lingqu.visible = !0, this.sp_yilingqu.visible = !1,
                    this.btn_exit.visible = !1);
        }
        onLingqu() {
            var e = this;
            this.btn_lingqu.visible = !1, this.sp_yilingqu.visible = !0, this.tishi.visible = !0,
                e.videoNum >= 3 && (b.reportEvent("skin3_get_click", ""), d.Instate.limitedSkin = !0,
                    _.BuySkin[this.skinId] = !0, t.LocalStorage.SetObjectItem("BuySkin", _.BuySkin),
                    _.DefaultPayerSKin = this.skinId, t.LocalStorage.SetIntItem("videoNum", 0), t.LocalStorage.SetStringItem("DefaultPayerSKin", _.DefaultPayerSKin),
                    p.Instate.Distribute("load_game_player", _.DefaultPayerSKin), p.Instate.Distribute("main_ui_refresh_xianding", null)),
                Laya.timer.once(800, this, function() {
                    e.tishi.visible = !1, e.onExitClick();
                });
        }
        onVideoClick() {
            var e = this;
            e.videoNum >= 3 || (b.reportEvent("skin3_ad_click", ""), w.getInstance().showVideo(0, function() {
                e.videoNum++, b.reportEvent("skin3_ad" + e.videoNum + "_success", ""), t.LocalStorage.SetIntItem("videoNum", e.videoNum),
                    e.updateJindu();
            }, function() {}));
        }
        onExitClick() {
            this.close(), Laya.Browser.onMiniGame && w.getInstance().hideBanner();
        }
    }
    class K extends e.Views.TryViewUI {
        constructor() {
            super(...arguments), this.skinID = 1001, this.playerskin = [], this.closecallback = null;
        }
        onAwake() {
            this.initTyrSkin(), b.reportEvent("skin_try_show", "");
            let e = this;
            this.btn_exit.visible = !1, Laya.timer.once(2e3, this, function() {
                e.btn_exit.visible = !0;
            }), Laya.Browser.onMiniGame && w.getInstance().showBannerNotCreat(3);
        }
        initTyrSkin() {
            for (let e in _.PlayerSkinIcon) e != _.DefaultPayerSKin && this.playerskin.push(e);
            let e = parseInt((Math.random() * (this.playerskin.length - 1)).toString());
            this.skinID = this.playerskin[e], this.sp_Skin.skin = _.PlayerModeIcon[this.skinID];
        }
        onOpened(e) {
            this.closecallback = e, this.btn_exit.on(Laya.Event.CLICK, this, this.onExitClick),
                this.btn_video.on(Laya.Event.CLICK, this, this.onVideoClick);
        }
        onExitClick() {
            Laya.Dialog.closeAll();
        }
        onVideoClick() {
            var e = this;
            b.reportEvent("skin_try_ad_click", "");
            w.getInstance().showVideo(0, function() {
                b.reportEvent("skin_try_ad_success", ""), p.Instate.Distribute("load_game_player", e.skinID),
                    Laya.Dialog.closeAll();
            }, function() {});
        }
        onDisable() {
            this.closecallback && "function" == typeof this.closecallback && this.closecallback(),
                Laya.Browser.onMiniGame && w.getInstance().hideBanner();
        }
    }
    class Z extends e.Views.TurntableDialogUI {
        constructor() {
            super(...arguments), this.IsStartUp = !0, this.arr = [], this.playCoinAnim = !1;
        }
        onAwake() {
            let e = this;
            b.reportEvent("hall_zp_show", ""), t.Button.BreathingScale(this.btn_video, 250, 250, this.btn_video, 1.1, 1.1),
                this.btn_video.on(Laya.Event.CLICK, this, this.Video), this.btn_close.on(Laya.Event.CLICK, this, this.Close),
                this.Render(), this.btn_close.visible = !1, Laya.timer.once(2e3, this, function() {
                    e.btn_close.visible = !0;
                });
            let n = 0;
            for (let e = 0; e < _.TurntableConfig.length; e++) {
                n += _.TurntableConfig[e][2];
            }
            let a = 0;
            for (let e = 0; e < _.TurntableConfig.length; e++) {
                a += _.TurntableConfig[e][2] / n, this.arr.push(a);
            }
            this.Fly = j.Instate.gameObject, j.Instate.gameObject = this.sp_Fly, Laya.Browser.onMiniGame && w.getInstance().showBannerNotCreat(3);
        }
        Close() {
            j.Instate.gameObject = this.Fly, Laya.Dialog.close("Views/TurntableDialog.scene");
        }
        FLy(e) {
            d.Instate.currency += e, t.LocalStorage.SetIntItem("currency_localstorage", d.Instate.currency),
                p.Instate.Distribute("main_ui_currency_update", d.Instate.currency), this.playCoinAnim = !0;
        }
        Render() {
            for (let e = 1; e < this.RenderingRoot.numChildren; e++) {
                const t = this.RenderingRoot.getChildAt(e);
                let n = _.TurntableConfig[e - 1];
                1 == n[0] ? t.getChildAt(0).value = n[1].toFixed(0) : n[1] in _.BuySkin && (t.getChildAt(0).value = n[3].toFixed(0),
                    t.visible = !0);
            }
        }
        Video() {
            let e = this;
            b.reportEvent("hall_zp_ad_click", ""), w.getInstance().showVideo(0, function() {
                b.reportEvent("hall_zp_ad_success", "");
                let t = Math.random(),
                    n = 0;
                for (let a = 0; a < e.arr.length; a++) {
                    if (t < e.arr[a]) {
                        n = a;
                        break;
                    }
                }
                n += 1, e.StartUp(n, () => {
                    n -= 1, 1 == _.TurntableConfig[n][0] && e.FLy(_.TurntableConfig[n][1]), e.Render();
                });
            }, function() {});
        }
        StartUp(e, t = null) {
            if (0 == this.IsStartUp) return;
            this.IsStartUp = !1;
            let n = 0;
            n = 22.5 + 45 * (e - 1);
            let a = this.RenderingRoot.rotation % 360;
            if (this.RenderingRoot.rotation = a, this.RenderingRoot) {
                let e = this;
                Laya.Tween.to(this.RenderingRoot, {
                    rotation: 1800 + n
                }, 5e3, (e, t, n, a) => Math.pow(n * e / a + t, .3), Laya.Handler.create(null, () => {
                    e.IsStartUp = !0, t && t();
                }));
            }
        }
        onDisable() {
            Laya.Tween.clearAll(this.btn_video), Laya.Browser.onMiniGame && w.getInstance().hideBanner(),
                this.playCoinAnim && this.view.FLy();
        }
        onDestroy() {}
        onOpened(e) {
            this.view = e;
        }
    }
    class J {
        constructor() {}
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("script/View/LodingView.ts", N), e("script/FBlockInputEvents.ts", D), e("script/ZS/MutualpushView.ts", M),
                e("script/ZS/HandAni.ts", k), e("script/View/SettlementView.ts", O), e("script/ZS/MutualSettlementView.ts", B),
                e("script/FButton.ts", P), e("script/View/SignInDialog.ts", R), e("script/View/SkinView.ts", T),
                e("script/WeightUlits.ts", V), e("script/View/SMSMView.ts", H), e("script/View/StartView.ts", G),
                e("script/FlyGoldManage.ts", j), e("script/Tool/Btn.ts", z), e("script/ZS/OneMutual.ts", U),
                e("script/ZS/MutualbannerView.ts", Y), e("script/ZS/MutualSideView.ts", W), e("script/ZS/FalseReturn.ts", X),
                e("script/View/ToastDialog.ts", F), e("script/View/TrySkinView.ts", q), e("script/View/TryView.ts", K),
                e("script/View/TurntableView.ts", Z);
        }
    }
    J.width = 750, J.height = 1334, J.scaleMode = "showall", J.screenMode = "none",
        J.alignV = "middle", J.alignH = "center", J.startScene = "Views/LodingView.scene", J.sceneRoot = "",
        J.debug = !1, J.stat = !1, J.physicsDebug = !1, J.exportSceneToJson = !0, J.init();
    new class {
        constructor() {
            window.Laya3D ? Laya3D.init(J.width, J.height) : Laya.init(J.width, J.height, Laya.WebGL),
                Laya.stage.scaleMode = J.scaleMode, Laya.stage.screenMode = J.screenMode, Laya.stage.alignV = J.alignV,
                Laya.stage.alignH = J.alignH, Laya.URL.exportSceneToJson = J.exportSceneToJson,
                Laya.MouseManager.multiTouchEnabled = !1;
            window.yad = platform.getInstance().createLogo();
            window.yad.bottom = 0;
            window.yad.centerX = 0;
            window.yad.scale(0.9, 0.9);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            J.startScene && Laya.Scene.open(J.startScene);
        }
    }(), new class {
        constructor() {
            this.version = 1, this.Sprite3D(), this.Timer();
        }
        Sprite3D() {
            Laya.Sprite3D.prototype.getChildByNames = function(e) {
                let t = [],
                    n = this;
                for (let a = 0; a < n._children.length; a++) {
                    const i = n._children[a];
                    i.name == e && t.push(i);
                }
                return t;
            }, console.log("补丁版本" + this.version.toString());
        }
        Timer() {
            Object.defineProperty(Laya.timer, "delta", {
                get: function() {
                    return this._delta > 50 && (this._delta = 50), this._delta;
                }
            });
        }
    }(), new class {
        constructor() {
            this.debug = !0, this.CompileJsonstr = '{"BLINNPHONG":[{"defineNames":["RECEIVESHADOW","SHADOW","DIFFUSEMAP","DIRECTIONLIGHT","UV"],"passIndex":1,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","DIRECTIONLIGHT","UV"],"passIndex":1,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","GPU_INSTANCE","DIFFUSEMAP","DIRECTIONLIGHT","UV"],"passIndex":1,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","GPU_INSTANCE","DIFFUSEMAP","DIRECTIONLIGHT","UV","UV1","TILINGOFFSET"],"passIndex":0,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","DIRECTIONLIGHT","UV"],"passIndex":0,"subShaderIndex":0},{"defineNames":["SHADOW","SHADOW_SOFT_SHADOW_LOW","GPU_INSTANCE","DIFFUSEMAP","DIRECTIONLIGHT","UV"],"passIndex":0,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","DIFFUSEMAP","DIRECTIONLIGHT","UV"],"passIndex":0,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","DIFFUSEMAP","DIRECTIONLIGHT","UV","COLOR","TILINGOFFSET"],"passIndex":0,"subShaderIndex":0},{"defineNames":["SHADOW","SHADOW_SOFT_SHADOW_LOW","DIRECTIONLIGHT","UV"],"passIndex":0,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","DIFFUSEMAP","DIRECTIONLIGHT","UV"],"passIndex":1,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","DIRECTIONLIGHT","UV"],"passIndex":1,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","GPU_INSTANCE","DIFFUSEMAP","DIRECTIONLIGHT","UV"],"passIndex":1,"subShaderIndex":0}],"PBR":[{"defineNames":["RECEIVESHADOW","SHADOW","DIRECTIONLIGHT","UV","BONE"],"passIndex":1,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","DIRECTIONLIGHT","UV"],"passIndex":1,"subShaderIndex":0},{"defineNames":["SHADOW","DIRECTIONLIGHT","UV"],"passIndex":1,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","DIRECTIONLIGHT","UV","BONE","EMISSION"],"passIndex":0,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","DIRECTIONLIGHT","UV","ALBEDOTEXTURE","EMISSION","EMISSIONTEXTURE"],"passIndex":0,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","GPU_INSTANCE","DIRECTIONLIGHT","UV","ALBEDOTEXTURE","EMISSION","EMISSIONTEXTURE"],"passIndex":0,"subShaderIndex":0},{"defineNames":["SHADOW","SHADOW_SOFT_SHADOW_LOW","DIRECTIONLIGHT","UV","ALBEDOTEXTURE","EMISSION","EMISSIONTEXTURE","METALLICGLOSSTEXTURE"],"passIndex":0,"subShaderIndex":0},{"defineNames":["SHADOW","SHADOW_SOFT_SHADOW_LOW","DIRECTIONLIGHT","UV","ALBEDOTEXTURE","EMISSION","EMISSIONTEXTURE"],"passIndex":0,"subShaderIndex":0},{"defineNames":["SHADOW","SHADOW_SOFT_SHADOW_LOW","GPU_INSTANCE","DIRECTIONLIGHT","UV","ALBEDOTEXTURE","EMISSION","EMISSIONTEXTURE"],"passIndex":0,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","DIRECTIONLIGHT","UV","BONE"],"passIndex":1,"subShaderIndex":0},{"defineNames":["RECEIVESHADOW","SHADOW","SHADOW_SOFT_SHADOW_LOW","DIRECTIONLIGHT","UV"],"passIndex":1,"subShaderIndex":0},{"defineNames":["SHADOW","SHADOW_SOFT_SHADOW_LOW","DIRECTIONLIGHT","UV"],"passIndex":1,"subShaderIndex":0}],"Unlit":[{"defineNames":["ALPHATEST","ALBEDOTEXTURE"],"passIndex":0,"subShaderIndex":0},{"defineNames":["GPU_INSTANCE","TILINGOFFSET","ALBEDOTEXTURE"],"passIndex":0,"subShaderIndex":0},{"defineNames":["ALBEDOTEXTURE"],"passIndex":0,"subShaderIndex":0}],"SkyBoxProcedural":[{"defineNames":["SUN_HIGH_QUALITY"],"passIndex":0,"subShaderIndex":0}],"Effect":[{"defineNames":["BONE","ADDTIVEFOG"],"passIndex":0,"subShaderIndex":0}],"PARTICLESHURIKEN":[{"defineNames":["DIFFUSEMAP","SPHERHBILLBOARD","COLOROVERLIFETIME","SHAPE","TINTCOLOR"],"passIndex":0,"subShaderIndex":0}]}';
        }
        Init() {
            this.debug && (Laya.Shader3D.debugMode = !0, Laya.stage.on(Laya.Event.KEY_DOWN, this, this.onKeyDown));
        }
        onKeyDown(e) {
            if (e.keyCode == Laya.Keyboard.O) {
                var t = {};
                Laya.stage.on(Laya.Event.MOUSE_DOWN, this, function() {
                    let e;
                    for (let n = 0; n < Laya.Shader3D.debugShaderVariantCollection.variantCount; n++) {
                        let a = Laya.Shader3D.debugShaderVariantCollection.getByIndex(n),
                            i = a.shader.name;
                        t[i] || (t[i] = []), e = t[i];
                        let o = {};
                        o.defineNames = a.defineNames, o.passIndex = a.passIndex, o.subShaderIndex = a.subShaderIndex,
                            e.push(o);
                    }
                    console.log(JSON.stringify(t));
                });
            }
        }
        Compile() {
            let e = JSON.parse(this.CompileJsonstr);
            for (let t in e) {
                let n = e[t];
                for (let e = 0; e < n.length; e++) {
                    let a = n[e];
                    Laya.Shader3D.compileShaderByDefineNames(t, a.subShaderIndex, a.passIndex, a.defineNames);
                }
            }
        }
    }().Compile();
}();