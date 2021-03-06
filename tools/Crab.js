// autogenerated with TableGen v.0.1
function Crab() {
    var _factory = this

    this.Wheel = function () {
        this.__parent = null
        this._diameter = null
        this._width = null
        this._spikes = null
        this.diameter = Wheel_diameter
        this.width = Wheel_width
        this.spikes = Wheel_spikes
        this.setDiameter = Wheel_setDiameter
        this.setWidth = Wheel_setWidth
        this.setSpikes = Wheel_setSpikes
    }

    this.CoolBicycle = function () {
        this.__parent = null
        this._ticker = null
        this._frontWheel = new _factory.Wheel()
        this._frontWheel.__parent = this
        this._backWheel = null
        this.ticker = CoolBicycle_ticker
        this.frontWheel = CoolBicycle_frontWheel
        this.backWheel = CoolBicycle_backWheel
        this.setTicker = CoolBicycle_setTicker
        this.setFrontWheel = CoolBicycle_setFrontWheel
        this.setBackWheel = CoolBicycle_setBackWheel
    }

    this.VehicleRow = function () {
        this.__parent = null
        this._id = null
        this._vin = null
        this._model = null
        this._leftFrontWheel = new _factory.Wheel()
        this._leftFrontWheel.__parent = this
        this._leftBackWheel = null
        this.id = VehicleRow_id
        this.vin = VehicleRow_vin
        this.model = VehicleRow_model
        this.leftFrontWheel = VehicleRow_leftFrontWheel
        this.leftBackWheel = VehicleRow_leftBackWheel
        this.setId = VehicleRow_setId
        this.setVin = VehicleRow_setVin
        this.setModel = VehicleRow_setModel
        this.setLeftFrontWheel = VehicleRow_setLeftFrontWheel
        this.setLeftBackWheel = VehicleRow_setLeftBackWheel
    }

    this.Vehicle = function () {
        this.__parent = null
        this._count = 0
        this.foreach = Vehicle_foreach
        this.count = Vehicle_count
        this.add = Vehicle_add
        this.remove = Vehicle_remove
        this.clear = Vehicle_clear
        this.getList = Vehicle_getList
        this._byId = {}
        this._byVin = {}
        this.get = Vehicle_get
        this.getByVin = Vehicle_getByVin
    }

    this.Motorcycle = function () {
        this.__parent = null
        this._maker = null
        this._id = null
        this._vin = null
        this._model = null
        this._leftFrontWheel = new _factory.Wheel()
        this._leftFrontWheel.__parent = this
        this._leftBackWheel = null
        this.maker = Motorcycle_maker
        this.id = VehicleRow_id
        this.vin = VehicleRow_vin
        this.model = VehicleRow_model
        this.leftFrontWheel = VehicleRow_leftFrontWheel
        this.leftBackWheel = VehicleRow_leftBackWheel
        this.setMaker = Motorcycle_setMaker
        this.setId = VehicleRow_setId
        this.setVin = VehicleRow_setVin
        this.setModel = VehicleRow_setModel
        this.setLeftFrontWheel = VehicleRow_setLeftFrontWheel
        this.setLeftBackWheel = VehicleRow_setLeftBackWheel
    }

    this.WidgetRow = function () {
        this.__parent = null
        this._id = null
        this._name = null
        this._bar = "bar"
        this.id = WidgetRow_id
        this.name = WidgetRow_name
        this.bar = WidgetRow_bar
        this.setId = WidgetRow_setId
        this.setName = WidgetRow_setName
        this.setBar = WidgetRow_setBar
    }

    this.Widget = function () {
        this.__parent = null
        this._count = 0
        this._next = 1
        this.foreach = Widget_foreach
        this.count = Widget_count
        this.add = Widget_add
        this.remove = Widget_remove
        this.clear = Widget_clear
        this.getList = Widget_getList
        this._byId = {}
        this._byName = {}
        this.get = Widget_get
        this.getByName = Widget_getByName
    }

    this.EodRow = function () {
        this.__parent = null
        this._date = null
        this._high = null
        this._low = null
        this._open = null
        this._last = null
        this._volume = null
        this.date = EodRow_date
        this.high = EodRow_high
        this.low = EodRow_low
        this.open = EodRow_open
        this.last = EodRow_last
        this.volume = EodRow_volume
        this.setDate = EodRow_setDate
        this.setHigh = EodRow_setHigh
        this.setLow = EodRow_setLow
        this.setOpen = EodRow_setOpen
        this.setLast = EodRow_setLast
        this.setVolume = EodRow_setVolume
    }

    this.Eod = function () {
        this.__parent = null
        this._rows = []
        this.foreach = Eod_foreach
        this.count = Eod_count
        this.insertAt = Eod_insertAt
        this.deleteAt = Eod_deleteAt
        this.append = Eod_append
        this.get = Eod_get
        this.clear = Eod_clear
        this.sort = Eod_sort
        this.getList = Eod_getList
        this.getOrdinal = Eod_getOrdinal
        this._byDate = {}
        this.getByDate = Eod_getByDate
    }

    function Wheel_diameter() {
        return this._diameter
    }

    function Wheel_setDiameter(value) {
        this._diameter = value
    }

    function Wheel_width() {
        return this._width
    }

    function Wheel_setWidth(value) {
        this._width = value
    }

    function Wheel_spikes() {
        return this._spikes
    }

    function Wheel_setSpikes(value) {
        this._spikes = value
    }

    function CoolBicycle_ticker() {
        return this._ticker
    }

    function CoolBicycle_setTicker(value) {
        this._ticker = value
    }

    function CoolBicycle_frontWheel() {
        return this._frontWheel
    }

    function CoolBicycle_setFrontWheel(value) {
        if (this._frontWheel !== value) {
            if (value) {
                if (value.__parent) {
                    throw new Error("set CoolBicycle.frontWheel: the new value already has a parent")
                }
                value.__parent = this
            }
            if (this._frontWheel) {
                var old = this._frontWheel
                old.__parent = null
                this._frontWheel = value
                return old
            } else {
                this._frontWheel = value
                return null
            }
        }
    }

    function CoolBicycle_backWheel() {
        return this._backWheel
    }

    function CoolBicycle_setBackWheel(value) {
        if (this._backWheel !== value) {
            if (value) {
                if (value.__parent) {
                    throw new Error("set CoolBicycle.backWheel: the new value already has a parent")
                }
                value.__parent = this
            }
            if (this._backWheel) {
                var old = this._backWheel
                old.__parent = null
                this._backWheel = value
                return old
            } else {
                this._backWheel = value
                return null
            }
        }
    }

    function VehicleRow_id() {
        return this._id
    }

    function VehicleRow_vin() {
        return this._vin
    }

    function VehicleRow_model() {
        return this._model
    }

    function VehicleRow_leftFrontWheel() {
        return this._leftFrontWheel
    }

    function VehicleRow_leftBackWheel() {
        return this._leftBackWheel
    }

    function VehicleRow_setId(value) {
        var old = this._id
        if (old !== value) {
            if (this.__parent) {
                if (!value) {
                    throw new Error("set VehicleRow.id: cannot put null in an indexed field")
                }
                if (value in this.__parent._byId) {
                    throw new Error("set VehicleRow.id: value is not unique: " + value)
                }
                if (old) {
                    delete this.__parent._byId[old]
                }
                this.__parent._byId[value] = this
            }
            this._id = value
        }
    }

    function VehicleRow_setVin(value) {
        var old = this._vin
        if (old !== value) {
            if (this.__parent) {
                if (!value) {
                    throw new Error("set VehicleRow.vin: cannot put null in an indexed field")
                }
                if (value in this.__parent._byVin) {
                    throw new Error("set VehicleRow.vin: value is not unique: " + value)
                }
                if (old) {
                    delete this.__parent._byVin[old]
                }
                this.__parent._byVin[value] = this
            }
            this._vin = value
        }
    }

    function VehicleRow_setModel(value) {
        this._model = value
    }

    function VehicleRow_setLeftFrontWheel(value) {
        if (this._leftFrontWheel !== value) {
            if (value) {
                if (value.__parent) {
                    throw new Error("set VehicleRow.leftFrontWheel: the new value already has a parent")
                }
                value.__parent = this
            }
            if (this._leftFrontWheel) {
                var old = this._leftFrontWheel
                old.__parent = null
                this._leftFrontWheel = value
                return old
            } else {
                this._leftFrontWheel = value
                return null
            }
        }
    }

    function VehicleRow_setLeftBackWheel(value) {
        if (this._leftBackWheel !== value) {
            if (value) {
                if (value.__parent) {
                    throw new Error("set VehicleRow.leftBackWheel: the new value already has a parent")
                }
                value.__parent = this
            }
            if (this._leftBackWheel) {
                var old = this._leftBackWheel
                old.__parent = null
                this._leftBackWheel = value
                return old
            } else {
                this._leftBackWheel = value
                return null
            }
        }
    }

    function Vehicle_foreach(action) {
        var index = this._byId
        for (var key in index) {
            var mustExit = action(index[key])
            if (mustExit) {
                return true
            }
        }
        return false
    }

    function Vehicle_count() {
        return this._count
    }

    function Vehicle_add(row) {
        if (row.__parent) {
            throw new Error("Vehicle add: the new row already has a parent")
        }
        if (!row._id) {
            throw new Error("Vehicle.id cannot be empty")
        }
        if (row._id in this._byId) {
            throw new Error("Vehicle.id is not unique: " + row._id)
        }
        if (!row._vin) {
            throw new Error("Vehicle.vin cannot be empty")
        }
        if (row._vin in this._byVin) {
            throw new Error("Vehicle.vin is not unique: " + row._vin)
        }
        this._byId[row._id] = row
        this._byVin[row._vin] = row
        this._count++
        row.__parent = this
        return row._id
    }

    function Vehicle_remove(id) {
        if (id) {
            if (id in this._byId) {
                var old = this._byId[id]
                this._count--
                delete this._byId[old._id]
                delete this._byVin[old._vin]
                old.__parent = null
                return old
            }
        }
        return null
    }

    function Vehicle_clear() {
        this._byId = {}
        this._byVin = {}
        this._count = 0
    }

    function Vehicle_getList() {
        var index = this._byId
        var result = []
        for (var key in index) {
            result.push(index[key])
        }
        return result
    }

    function Vehicle_get(id) {
        return this._byId[id]
    }

    function Vehicle_getByVin(vin) {
        return this._byVin[vin]
    }

    function Motorcycle_maker() {
        return this._maker
    }

    function Motorcycle_setMaker(value) {
        this._maker = value
    }

    function WidgetRow_id() {
        return this._id
    }

    function WidgetRow_name() {
        return this._name
    }

    function WidgetRow_bar() {
        return this._bar
    }

    function WidgetRow_setId(value) {
        var old = this._id
        if (old !== value) {
            if (this.__parent) {
                if (!value) {
                    throw new Error("set WidgetRow.id: cannot put null in an indexed field")
                }
                if (value in this.__parent._byId) {
                    throw new Error("set WidgetRow.id: value is not unique: " + value)
                }
                if (old) {
                    delete this.__parent._byId[old]
                }
                this.__parent._byId[value] = this
            }
            this._id = value
        }
    }

    function WidgetRow_setName(value) {
        var old = this._name
        if (old !== value) {
            if (this.__parent) {
                if (!value) {
                    throw new Error("set WidgetRow.name: cannot put null in an indexed field")
                }
                if (value in this.__parent._byName) {
                    throw new Error("set WidgetRow.name: value is not unique: " + value)
                }
                if (old) {
                    delete this.__parent._byName[old]
                }
                this.__parent._byName[value] = this
            }
            this._name = value
        }
    }

    function WidgetRow_setBar(value) {
        this._bar = value
    }

    function Widget_foreach(action) {
        var index = this._byId
        for (var key in index) {
            var mustExit = action(index[key])
            if (mustExit) {
                return true
            }
        }
        return false
    }

    function Widget_count() {
        return this._count
    }

    function Widget_add(row) {
        if (row.__parent) {
            throw new Error("Widget add: the new row already has a parent")
        }
        if (!row._name) {
            throw new Error("Widget.name cannot be empty")
        }
        if (row._name in this._byName) {
            throw new Error("Widget.name is not unique: " + row._name)
        }
        if (!row._id) {
            row._id = this._next.toString()
            this._next++
        }
        this._next++
        this._byId[row._id] = row
        this._byName[row._name] = row
        this._count++
        row.__parent = this
        return row._id
    }

    function Widget_remove(id) {
        if (id) {
            if (id in this._byId) {
                var old = this._byId[id]
                this._count--
                delete this._byId[old._id]
                delete this._byName[old._name]
                old.__parent = null
                return old
            }
        }
        return null
    }

    function Widget_clear() {
        this._byId = {}
        this._byName = {}
        this._count = 0
        this._next = 1
    }

    function Widget_getList() {
        var index = this._byId
        var result = []
        for (var key in index) {
            result.push(index[key])
        }
        return result
    }

    function Widget_get(id) {
        return this._byId[id]
    }

    function Widget_getByName(name) {
        return this._byName[name]
    }

    function EodRow_date() {
        return this._date
    }

    function EodRow_high() {
        return this._high
    }

    function EodRow_low() {
        return this._low
    }

    function EodRow_open() {
        return this._open
    }

    function EodRow_last() {
        return this._last
    }

    function EodRow_volume() {
        return this._volume
    }

    function EodRow_setDate(value) {
        var old = this._date
        if (old !== value) {
            if (this.__parent) {
                if (!value) {
                    throw new Error("set EodRow.date: cannot put null in an indexed field")
                }
                if (value in this.__parent._byDate) {
                    throw new Error("set EodRow.date: value is not unique: " + value)
                }
                if (old) {
                    delete this.__parent._byDate[old]
                }
                this.__parent._byDate[value] = this
            }
            this._date = value
        }
    }

    function EodRow_setHigh(value) {
        this._high = value
    }

    function EodRow_setLow(value) {
        this._low = value
    }

    function EodRow_setOpen(value) {
        this._open = value
    }

    function EodRow_setLast(value) {
        this._last = value
    }

    function EodRow_setVolume(value) {
        this._volume = value
    }

    function Eod_foreach(action) {
        var rows = this._rows
        var length = rows.length
        var i
        for (i = 0; i < length; i++) {
            var row = rows[i]
            var mustExit = action(row, i)
            if (mustExit) {
                return true
            }
        }
        return false
    }

    function Eod_count() {
        return this._rows.length
    }

    function Eod_append(row) {
        if (row.__parent) {
            throw new Error("Eod append: the new row already has a parent")
        }
        if (!row._date) {
            throw new Error("Eod.date cannot be empty")
        }
        if (row._date in this._byDate) {
            throw new Error("Eod.date is not unique: " + row._date)
        }
        this._byDate[row._date] = row
        var id = this._rows.length
        row.__parent = this
        this._rows.push(row)
        return id
    }

    function Eod_insertAt(pos, row) {
        if (row.__parent) {
            throw new Error("Eod insertAt: the new row already has a parent")
        }
        if (pos < 0 || pos > this._rows.length) {
            throw new Error("Eod insertAt: pos out of range")
        }
        if (!row._date) {
            throw new Error("Eod.date cannot be empty")
        }
        if (row._date in this._byDate) {
            throw new Error("Eod.date is not unique: " + row._date)
        }
        this._byDate[row._date] = row
        row.__parent = this
        this._rows.splice(pos, 0, row)
        return pos
    }

    function Eod_deleteAt(pos) {
        if (pos >=0 && pos < this._rows.length) {
            var old = this._rows[pos]
            this._rows.splice(pos, 1)
            delete this._byDate[old._date]
            old.__parent = null
            return old
        }
        return null
    }

    function Eod_get(id) {
        return this._rows[id]
    }

    function Eod_clear() {
        this._byDate = {}
        this._count = 0
        this._rows = []
    }

    function Eod_sort(comparer) {
        this._rows.sort(comparer)
    }

    function Eod_getList() {
        return this._rows.slice()
    }

    function Eod_getOrdinal(row) {
        return this._rows.indexOf(row)
    }

    function Eod_getByDate(date) {
        return this._byDate[date]
    }
}
if (typeof exports !== "undefined") {
    var obj = new Crab()
    for (var name in obj) {
        exports[name] = obj[name]
    }
}