var assert = require("assert")
var crab = require("./Crab.js")

describe("Map tables", function() {
	describe("Class", function() {
		it('getters and setters', function() {
			var wh1 = new crab.Wheel()
			var wh2 = new crab.Wheel()
			var b1 = new crab.CoolBicycle()
			
			assert.equal(b1.backWheel(), null)
			b1.frontWheel().setSpikes(true)
						
			wh1.setWidth(5)
			wh1.setDiameter(17)
			
			wh2.setWidth(6)
			wh2.setDiameter(19)
			
			b1.setBackWheel(wh1)

			assert.equal(b1.backWheel(), wh1)
			assert.equal(wh1.__parent, b1)

			var x = b1.setBackWheel(null)
			assert.equal(b1.backWheel(), null)
			assert.equal(wh1.__parent, null)

			x = b1.setBackWheel(wh1)
			assert.equal(x, null)

			x = b1.setBackWheel(wh2)
			assert.equal(x, wh1)
			assert.equal(wh2.__parent, b1)
			assert.equal(b1.frontWheel().spikes(), true)
			assert.equal(b1.backWheel().width(), 6)
		});
	})
	
	describe("Map", function() {
		it("Manual PK", function() {
			var vtab = new crab.Vehicle()
			var v1 = new crab.VehicleRow()
			var v2 = new crab.VehicleRow()
			v1.setId("id1")
			v1.setVin("1234")
			v2.setId("id2")
			v2.setVin("5678")
			vtab.add(v1)
			vtab.add(v2)
			var p = v1.leftFrontWheel().__parent
			assert.equal(p, v1)
			
			v1.leftFrontWheel().setDiameter(10)
			v1.setLeftBackWheel(new crab.Wheel())
			var x1 = vtab.get("id1")
			assert.equal(x1, v1)
			var x2 = vtab.getByVin("5678")
			assert.equal(x2, v2)
			assert.equal(x1.leftFrontWheel().diameter(), 10)
			assert.equal(vtab.count(), 2)
			assert.equal(vtab.getList().length, 2)
			var action = function(v) {
				v.setModel("hello")
			}
			vtab.foreach(action)
			assert(v1.model(), 888)
			assert(v2.model(), 888)
			
			vtab.remove("id2")
			assert.equal(vtab.count(), 1)
			assert.equal(vtab.get("id2"), null)
			assert.equal(vtab.getByVin("5678"), null)
			
			vtab.clear()
			assert.equal(vtab.count(), 0)
			assert.equal(vtab.get("id1"), null)
			assert.equal(vtab.getByVin("1234"), null)			
		})
		
		it("Auto PK", function() {
			var ww = new crab.Widget()
			var w1 = new crab.WidgetRow()
			w1.setName("n1")
			var w2 = new crab.WidgetRow()
			w2.setName("n2")
			var id1 = ww.add(w1)
			var id2 = ww.add(w2)
			assert.equal(w1.id(), id1)
			assert.equal(w2.id(), id2)
			assert.equal(ww.count(), 2)
			assert.equal(ww.get(id1), w1)
			assert.equal(ww.get(id2), w2)
			
		})
	})
	
	describe("Inheritance", function() {
		it("Class inherits from Map", function() {
			var vtab = new crab.Vehicle()
			var m1 = new crab.Motorcycle()
			m1.setId("id1")
			m1.setVin("1234")
			m1.setMaker("Suzuki")
			vtab.add(m1)
			var m2 = new crab.Motorcycle()
			m2.setId("id2")
			m2.setVin("456")
			m2.setMaker("Honda")
			vtab.add(m2)
			
			m1.setId("id111")
			var m = vtab.get("id111")
			
			assert.equal(m.id(), "id111")
			assert.equal(m, m1)			
		})
	})
	
	var byDateDesc = function(left, right) {
		return right.date().localeCompare(left.date())
	}
	
	describe("Array", function() {
		it("Append and insert", function() {
			var eods = new crab.Eod()
			var eod1 = new crab.EodRow()
			eod1.setDate("20170401")
			eod1.setLast(10)
			var eod2 = new crab.EodRow()
			eod2.setDate("20170403")
			eod2.setLast(15)
			var eod3 = new crab.EodRow()
			eod3.setDate("20170402")
			eod3.setLast(12)
			var id0 = eods.append(eod1)
			var id1 = eods.append(eod2)
			assert.equal(id0, 0)
			assert.equal(id1, 1)
			assert.equal(eods.getOrdinal(eod1), 0)
			assert.equal(eods.getOrdinal(eod2), 1)
			var id2 = eods.insertAt(1, eod3)
			assert.equal(id2, 1)
			assert.equal(eods.count(), 3)
			assert.equal(eods.getList().length, 3)
			assert.equal(eods.get(0), eod1)
			assert.equal(eods.get(1), eod3)
			assert.equal(eods.get(2), eod2)
			var deleted  = eods.deleteAt(0)
			assert.equal(deleted, eod1)
			assert.equal(eods.count(), 2)
			assert.equal(eods.get(0), eod3)
			assert.equal(eods.get(1), eod2)
			eod2.setDate("20170404")
			assert.equal(eods.get(1).date(), "20170404")

			assert.equal(eods.getByDate("20170402"), eod3)
			assert.equal(eods.get(0), eod3)
			
			eods.sort(byDateDesc)
			assert.equal(eods.get(0), eod2)
			
			eods.clear()
			assert.equal(eods.count(), 0)	
			assert.equal(eods.getByDate("20170402"), undefined)
			assert.equal(eods.get(0), undefined)
		})
	})
})
